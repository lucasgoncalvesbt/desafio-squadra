import { getCustomRepository, ILike } from 'typeorm';

import { Uf } from '../entities/Uf';
import { UfRepository } from '../repository/UfRepository';

class FindUfBySiglaService {
  async execute(sigla: string): Promise<Uf> {
    const ufRepository = getCustomRepository(UfRepository);

    const uf = await ufRepository.createQueryBuilder()
      .where('LOWER(sigla) = LOWER(:sigla)', { sigla })
      .getOne();

    return uf;
  }
}

export { FindUfBySiglaService };
