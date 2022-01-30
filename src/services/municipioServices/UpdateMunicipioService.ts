import { getCustomRepository } from 'typeorm';

import { IUpdateMunicipioDTO } from '../../dto/IUpdateMunicipioDTO';
import { Municipio } from '../../entities/Municipio';
import { AppError } from '../../errors/AppError';
import { MunicipioRepository } from '../../repository/MunicipioRepository';
import { UfRepository } from '../../repository/UfRepository';

class UpdateMunicipioService {
  async execute({
    codigoMunicipio, codigoUF, nome, status,
  }: IUpdateMunicipioDTO): Promise<Municipio> {
    const municipioRepository = getCustomRepository(MunicipioRepository);
    const ufRepository = getCustomRepository(UfRepository);

    const municipioToUpdate = await municipioRepository.findOne(codigoMunicipio);

    if (!municipioToUpdate) {
      throw new AppError('Não existe nenhum município com esse código', 404);
    }

    const ufExists = await ufRepository.findOne(codigoUF);

    if (!ufExists) {
      throw new AppError('Não existe nenhuma UF com esse código', 404);
    }

    municipioRepository.merge(municipioToUpdate, { codigoUF, nome, status });

    const municipio = await municipioRepository.save(municipioToUpdate);

    return municipio;
  }
}

export { UpdateMunicipioService };