import { getCustomRepository } from 'typeorm';

import { IUpdatePessoaDTO } from '../../dto/IUpdatePessoaDTO';
import { Pessoa } from '../../entities/Pessoa';
import { AppError } from '../../errors/AppError';
import { BairroRepository } from '../../repository/BairroRepository';
import { EnderecoRepository } from '../../repository/EnderecoRepository';
import { PessoaRepository } from '../../repository/PessoaRepository';

class UpdatePessoaService {
  async execute({
    codigoPessoa,
    nome,
    sobrenome,
    idade,
    login,
    senha,
    status,
    enderecos,
  }: IUpdatePessoaDTO): Promise<Pessoa> {
    const pessoaRepository = getCustomRepository(PessoaRepository);
    const enderecoRepository = getCustomRepository(EnderecoRepository);
    const bairroRepository = getCustomRepository(BairroRepository);

    const pessoaToUpdate = await pessoaRepository.findOne(codigoPessoa);

    if (!pessoaToUpdate) {
      throw new AppError('Não existe pessoa com esse código.', 404);
    }

    pessoaRepository.merge(pessoaToUpdate, {
      nome,
      sobrenome,
      idade,
      login,
      senha,
      status,
    });

    const enderecosToUpdate = await enderecoRepository.find({
      where: { codigoPessoa: pessoaToUpdate.codigoPessoa },
    });

    enderecosToUpdate.forEach(async (endereco) => {
      if (!enderecos.find((e) => e.codigoEndereco === endereco.codigoEndereco)) {
        await enderecoRepository.delete(endereco.codigoEndereco);
      }
    });

    enderecos.forEach(async ({
      codigoEndereco,
      cep,
      codigoBairro,
      complemento,
      nomeRua,
      numero,
    }) => {
      if (codigoEndereco) {
        const enderecoToUpdate = await enderecoRepository.findOne(codigoEndereco);
        if (!enderecoToUpdate) {
          throw new AppError('Não existe endereço com esse código.', 404);
        }

        const bairroExists = await bairroRepository.findOne(codigoBairro);
        if (!bairroExists) {
          throw new AppError('Não existe bairro com esse código.', 404);
        }

        enderecoRepository.merge(enderecoToUpdate, {
          cep,
          codigoBairro,
          complemento,
          nomeRua,
          numero,
        });

        await enderecoRepository.save(enderecoToUpdate);
      } else {
        const endereco = enderecoRepository.create({
          cep,
          codigoBairro,
          complemento,
          nomeRua,
          numero,
          codigoPessoa: pessoaToUpdate.codigoPessoa,
        });
        await enderecoRepository.save(endereco);
      }
    });

    const pessoa = await pessoaRepository.save(pessoaToUpdate);

    return pessoa;
  }
}

export { UpdatePessoaService };
