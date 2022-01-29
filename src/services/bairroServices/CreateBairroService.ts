import { getCustomRepository } from 'typeorm';

import { ICreateBairroDTO } from '../../dto/ICreateBairroDTO';
import { Bairro } from '../../entities/Bairro';
import { BairroRepository } from '../../repository/BairroRepository';

class CreateBairroService {
  async execute({ codigoMunicipio, nome, status }: ICreateBairroDTO): Promise<Bairro> {
    const bairroRepository = getCustomRepository(BairroRepository);

    const bairro = bairroRepository.create({
      codigoMunicipio,
      nome,
      status,
    });

    await bairroRepository.save(bairro);

    return bairro;
  }
}

export { CreateBairroService };
