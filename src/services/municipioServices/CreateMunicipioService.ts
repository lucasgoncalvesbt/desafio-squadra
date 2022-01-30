import { getCustomRepository } from 'typeorm';

import { ICreateMunicipioDTO } from '../../dto/ICreateMunicipioDTO';
import { Municipio } from '../../entities/Municipio';
import { AppError } from '../../errors/AppError';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class CreateMunicipioService {
  async execute({ codigoUF, nome, status }: ICreateMunicipioDTO): Promise<Municipio> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipioWithNameInUFExists = await municipioRepository.createQueryBuilder()
      .where('LOWER(nome) = LOWER(:nome)', { nome })
      .andWhere('codigo_uf = :codigoUF', { codigoUF })
      .getOne();

    if (municipioWithNameInUFExists) {
      throw new AppError('Já existe um Municipio com esse nome nessa UF.');
    }

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
