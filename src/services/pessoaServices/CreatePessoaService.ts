import { getCustomRepository } from 'typeorm';

import { ICreatePessoaDTO } from '../../dto/ICreatePessoaDTO';
import { Pessoa } from '../../entities/Pessoa';
import { AppError } from '../../errors/AppError';
import { BairroRepository } from '../../repository/BairroRepository';
import { EnderecoRepository } from '../../repository/EnderecoRepository';
import { PessoaRepository } from '../../repository/PessoaRepository';

class CreatePessoaService {
  async execute({
    nome,
    sobrenome,
    idade,
    login,
    senha,
    status,
    enderecos,
  }: ICreatePessoaDTO): Promise<Pessoa[]> {
    const pessoaRepository = getCustomRepository(PessoaRepository);
    const bairroRepository = getCustomRepository(BairroRepository);
    const enderecoRepository = getCustomRepository(EnderecoRepository);

    const pessoa = pessoaRepository.create({
      nome,
      sobrenome,
      idade,
      login,
      senha,
      status,
    });

    await pessoaRepository.save(pessoa);

    const enderecosSaved = await Promise.all(enderecos.map(async ({
      cep,
      codigoBairro,
      complemento,
      nomeRua,
      numero,
    }) => {
      const bairroExists = await bairroRepository.findOne(codigoBairro);
      if (!bairroExists) {
        throw new AppError(`Não existe bairro com o código ${codigoBairro}`, 404);
      }

      const endereco = enderecoRepository.create({
        cep,
        codigoBairro,
        complemento,
        nomeRua,
        numero,
        codigoPessoa: pessoa.codigoPessoa,
      });
      await enderecoRepository.save(endereco);

      return endereco;
    }));

    return pessoaRepository.find();
  }
}

export { CreatePessoaService };
