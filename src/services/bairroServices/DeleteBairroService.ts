import { getCustomRepository } from 'typeorm';

import { Bairro } from '../../entities/Bairro';
import { AppError } from '../../errors/AppError';
import { BairroRepository } from '../../repository/BairroRepository';

class DeleteBairroService {
  async execute(codigoBairro: number): Promise<Bairro[]> {
    const bairroRepository = getCustomRepository(BairroRepository);
    const bairro = await bairroRepository.findOne(codigoBairro);

    if (!bairro) {
      throw new AppError('Não existe bairro com esse código', 404);
    }

    await bairroRepository.remove(bairro);

    return bairroRepository.find();
  }
}

export { DeleteBairroService };
