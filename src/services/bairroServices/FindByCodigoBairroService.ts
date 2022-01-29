import { getCustomRepository } from 'typeorm';

import { Bairro } from '../../entities/Bairro';
import { AppError } from '../../errors/AppError';
import { BairroRepository } from '../../repository/BairroRepository';

class FindByCodigoBairroService {
  async execute(codigoBairro: number): Promise<Bairro> {
    const bairroRepository = getCustomRepository(BairroRepository);
    const bairro = await bairroRepository.findOne(codigoBairro);

    if (!bairro) {
      throw new AppError('Não existe nenhum bairro com esse código', 404);
    }

    return bairro;
  }
}
export { FindByCodigoBairroService };
