import { getCustomRepository } from 'typeorm';

import { ICreateMunicipioDTO } from '../../dto/ICreateMunicipioDTO';
import { Municipio } from '../../entities/Municipio';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class CreateMunicipioService {
  async execute({ codigoUF, nome, status }: ICreateMunicipioDTO): Promise<Municipio> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = municipioRepository.create({
      codigoUF,
      nome,
      status,
    });

    await municipioRepository.save(municipio);

    return municipio;
  }
}

export { CreateMunicipioService };
