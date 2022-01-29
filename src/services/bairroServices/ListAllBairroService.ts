import { getCustomRepository } from 'typeorm';

import { Bairro } from '../../entities/Bairro';
import { BairroRepository } from '../../repository/BairroRepository';

class ListAllBairroService {
  async execute(): Promise<Bairro[]> {
    const bairroRepository = getCustomRepository(BairroRepository);
    const bairros = await bairroRepository.find();
    return bairros;
  }
}

export { ListAllBairroService };
