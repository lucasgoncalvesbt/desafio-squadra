import { getCustomRepository } from 'typeorm';

import { Municipio } from '../../entities/Municipio';
import { AppError } from '../../errors/AppError';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class ListByUfMunicipioService {
  async execute(codigoUF: number): Promise<Municipio[]> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = await municipioRepository.find({ where: { codigoUF } });

    if (!municipio) {
      throw new AppError('Não existe nenhuma UF com esse código', 404);
    }

    return municipio;
  }
}

export { ListByUfMunicipioService };
