import { getCustomRepository, ILike } from 'typeorm';

import { Uf } from '../entities/Uf';
import { AppError } from '../errors/AppError';
import { UfRepository } from '../repository/UfRepository';

class FindUfBySiglaService {
  async execute(sigla: string): Promise<Uf> {
    const ufRepository = getCustomRepository(UfRepository);

    const uf = await ufRepository.createQueryBuilder()
      .where('LOWER(sigla) = LOWER(:sigla)', { sigla })
      .getOne();

    if (!uf) {
      throw new AppError('Não existe nenhuma UF com essa sigla', 404);
    }

    return uf;
  }
}

export { FindUfBySiglaService };
