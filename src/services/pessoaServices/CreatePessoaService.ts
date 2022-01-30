import { getCustomRepository } from 'typeorm';

import { ICreatePessoaDTO } from '../../dto/ICreatePessoaDTO';
import { Pessoa } from '../../entities/Pessoa';
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
  }: ICreatePessoaDTO): Promise<Pessoa> {
    const pessoaRepository = getCustomRepository(PessoaRepository);
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

    enderecos.map(async ({
      cep,
      codigoBairro,
      complemento,
      nomeRua,
      numero,
    }) => {
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
    });

    return pessoa;
  }
}

export { CreatePessoaService };
