import { getCustomRepository } from 'typeorm';

import { Municipio } from '../../entities/Municipio';
import { AppError } from '../../errors/AppError';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class FindByNomeMunicipioService {
  async execute(nome: string): Promise<Municipio> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = await municipioRepository.createQueryBuilder()
      .where('LOWER(nome) = LOWER(:nome)', { nome })
      .getOne();

    if (!municipio) {
      throw new AppError('Não existe nenhum municipio com esse nome', 404);
    }

    return municipio;
  }
}

export { FindByNomeMunicipioService };
