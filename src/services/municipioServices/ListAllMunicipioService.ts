import { getCustomRepository } from 'typeorm';

import { Municipio } from '../../entities/Municipio';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class ListAllMunicipioService {
  async execute(): Promise<Municipio[]> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipios = await municipioRepository.find();

    return municipios;
  }
}

export { ListAllMunicipioService };
