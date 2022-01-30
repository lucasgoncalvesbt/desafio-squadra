import { getCustomRepository } from 'typeorm';

import { Pessoa } from '../../entities/Pessoa';
import { AppError } from '../../errors/AppError';
import { PessoaRepository } from '../../repository/PessoaRepository';

class FindByCodigoPessoaService {
  async execute(codigoPessoa: number): Promise<Pessoa> {
    const pessoaRepository = getCustomRepository(PessoaRepository);
    const pessoa = await pessoaRepository.findOne({
      codigoPessoa,
    }, { relations: ['enderecos', 'enderecos.bairro', 'enderecos.bairro.municipio', 'enderecos.bairro.municipio.uf'] });

    if (!pessoa) {
      throw new AppError('Não existe pessoa com esse código.', 404);
    }

    return pessoa;
  }
}

export { FindByCodigoPessoaService };
