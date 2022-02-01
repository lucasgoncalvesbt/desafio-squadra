import { getCustomRepository } from 'typeorm';

import { Uf } from '../../entities/Uf';
import { AppError } from '../../errors/AppError';
import { UfRepository } from '../../repository/UfRepository';

class DeleteUfService {
  async execute(codigoUf: number): Promise<Uf[]> {
    const ufRepository = getCustomRepository(UfRepository);
    const uf = await ufRepository.findOne(codigoUf);

    if (!uf) {
      throw new AppError('Não existe uf com esse código', 404);
    }

    await ufRepository.remove(uf);

    return ufRepository.find();
  }
}

export { DeleteUfService };
