import { getCustomRepository } from 'typeorm';

import { Municipio } from '../../entities/Municipio';
import { AppError } from '../../errors/AppError';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class FindByCodigoMunicipioService {
  async execute(codigoMunicipio: number): Promise<Municipio> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = await municipioRepository.findOne(codigoMunicipio);

    if (!municipio) {
      throw new AppError('Não existe nenhum municipio com esse código', 404);
    }

    return municipio;
  }
}

export { FindByCodigoMunicipioService };
