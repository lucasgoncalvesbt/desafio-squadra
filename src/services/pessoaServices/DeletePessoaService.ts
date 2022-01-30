import { getCustomRepository } from 'typeorm';

import { AppError } from '../../errors/AppError';
import { PessoaRepository } from '../../repository/PessoaRepository';

class DeletePessoaService {
  async execute(codigoPessoa: number): Promise<void> {
    const pessoaRepository = getCustomRepository(PessoaRepository);
    const pessoa = await pessoaRepository.findOne({ where: { codigoPessoa } });

    if (!pessoa) {
      throw new AppError('Não existe pessoa com esse código', 404);
    }

    await pessoaRepository.remove(pessoa);
  }
}

export { DeletePessoaService };
