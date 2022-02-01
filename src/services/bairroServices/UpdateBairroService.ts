import { getCustomRepository } from 'typeorm';

import { IUpdateBairroDTO } from '../../dto/IUpdateBairroDTO';
import { Bairro } from '../../entities/Bairro';
import { AppError } from '../../errors/AppError';
import { BairroRepository } from '../../repository/BairroRepository';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class UpdateBairroService {
  async execute({
    codigoBairro, codigoMunicipio, nome, status,
  }: IUpdateBairroDTO): Promise<Bairro[]> {
    const bairroRepository = getCustomRepository(BairroRepository);
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const bairroToUpdate = await bairroRepository.findOne(codigoBairro);
    if (!bairroToUpdate) {
      throw new AppError('Não existe nenhum bairro com esse código', 404);
    }

    const municipio = await municipioRepository.findOne(codigoMunicipio);
    if (!municipio) {
      throw new AppError('Não existe nenhum municipio com esse código', 404);
    }

    const bairroWithNameInMunicipioExists = await bairroRepository.createQueryBuilder()
      .where('LOWER(nome) = LOWER(:nome)', { nome })
      .andWhere('codigo_municipio = :codigoMunicipio', { codigoMunicipio })
      .andWhere('codigo_bairro != :codigoBairro', { codigoBairro })
      .getOne();

    if (bairroWithNameInMunicipioExists) {
      throw new AppError('Já existe um Bairro com esse nome nesse Município.');
    }

    bairroRepository.merge(bairroToUpdate, {
      codigoMunicipio,
      nome,
      status,
    });

    await bairroRepository.save(bairroToUpdate);

    return bairroRepository.find();
  }
}

export { UpdateBairroService };
