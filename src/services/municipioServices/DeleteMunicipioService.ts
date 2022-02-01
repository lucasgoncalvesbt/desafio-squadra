import { getCustomRepository } from 'typeorm';

import { Municipio } from '../../entities/Municipio';
import { AppError } from '../../errors/AppError';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class DeleteMunicipioService {
  async execute(codigoMunicipio: number): Promise<Municipio[]> {
    const municipioRepository = getCustomRepository(MunicipioRepository);
    const municipio = await municipioRepository.findOne({ where: { codigoMunicipio } });

    if (!municipio) {
      throw new AppError('Não existe municipio com esse código', 404);
    }

    await municipioRepository.remove(municipio);

    return municipioRepository.find();
  }
}

export { DeleteMunicipioService };
