import { getCustomRepository } from 'typeorm';

import { Pessoa } from '../../entities/Pessoa';
import { PessoaRepository } from '../../repository/PessoaRepository';

class ListAllPessoaService {
  async execute():Promise<Pessoa[]> {
    const pessoaRepository = getCustomRepository(PessoaRepository);

    const pessoas = await pessoaRepository.find();

    return pessoas;
  }
}

export { ListAllPessoaService };
