import { getCustomRepository } from 'typeorm';

import { ICreateBairroDTO } from '../../dto/ICreateBairroDTO';
import { Bairro } from '../../entities/Bairro';
import { AppError } from '../../errors/AppError';
import { BairroRepository } from '../../repository/BairroRepository';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class CreateBairroService {
  async execute({ codigoMunicipio, nome, status }: ICreateBairroDTO): Promise<Bairro[]> {
    const bairroRepository = getCustomRepository(BairroRepository);
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipioExists = await municipioRepository.findOne(codigoMunicipio);
    if (!municipioExists) {
      throw new AppError('Não existe nenhum municipio com esse código', 404);
    }

    const bairroWithNameInMunicipioExists = await bairroRepository.createQueryBuilder()
      .where('LOWER(nome) = LOWER(:nome)', { nome })
      .andWhere('codigo_municipio = :codigoMunicipio', { codigoMunicipio })
      .getOne();

    if (bairroWithNameInMunicipioExists) {
      throw new AppError('Já existe um Bairro com esse nome nesse Município.');
    }

    const bairro = bairroRepository.create({
      codigoMunicipio,
      nome,
      status,
    });

    await bairroRepository.save(bairro);

    return bairroRepository.find();
  }
}

export { CreateBairroService };
