import { getCustomRepository } from 'typeorm';

import { Bairro } from '../../entities/Bairro';
import { AppError } from '../../errors/AppError';
import { BairroRepository } from '../../repository/BairroRepository';
import { MunicipioRepository } from '../../repository/MunicipioRepository';

class ListByMunicipioBairroService {
  async execute(codigoMunicipio: number): Promise<Bairro[]> {
    const bairroRepository = getCustomRepository(BairroRepository);
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipioExists = await municipioRepository.findOne(codigoMunicipio);

    if (!municipioExists) {
      throw new AppError('Não existe nenhum município com esse código', 404);
    }

    const bairros = await bairroRepository.find({
      where: { codigoMunicipio },
    });

    return bairros;
  }
}
export { ListByMunicipioBairroService };
