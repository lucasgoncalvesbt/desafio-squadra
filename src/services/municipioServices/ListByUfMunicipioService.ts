import { getCustomRepository } from 'typeorm';

import { Municipio } from '../../entities/Municipio';
import { AppError } from '../../errors/AppError';
import { MunicipioRepository } from '../../repository/MunicipioRepository';
import { UfRepository } from '../../repository/UfRepository';

class ListByUfMunicipioService {
  async execute(codigoUF: number): Promise<Municipio[]> {
    const municipioRepository = getCustomRepository(MunicipioRepository);
    const ufReposiory = getCustomRepository(UfRepository);

    const ufExists = await ufReposiory.findOne(codigoUF);
    if (!ufExists) {
      throw new AppError('Não existe nenhuma UF com esse código', 404);
    }

    const municipios = await municipioRepository.find({
      where: { codigoUF },
    });

    return municipios;
  }
}

export { ListByUfMunicipioService };
