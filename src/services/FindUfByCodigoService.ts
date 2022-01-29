import { getCustomRepository } from 'typeorm';

import { Uf } from '../entities/Uf';
import { UfRepository } from '../repository/UfRepository';

class FindUfByCodigoService {
  async execute(codigoUf: number): Promise<Uf> {
    const ufRepository = getCustomRepository(UfRepository);

    const uf = await ufRepository.findOne(codigoUf);

    return uf;
  }
}

export { FindUfByCodigoService };
