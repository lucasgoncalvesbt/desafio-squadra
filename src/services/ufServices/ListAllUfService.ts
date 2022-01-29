import { getCustomRepository } from 'typeorm';

import { Uf } from '../../entities/Uf';
import { UfRepository } from '../../repository/UfRepository';

class ListAllUfService {
  async execute(): Promise<Uf[]> {
    const ufRepository = getCustomRepository(UfRepository);

    const ufs = await ufRepository.find();

    return ufs;
  }
}

export { ListAllUfService };
