import { getCustomRepository } from 'typeorm';

import { IUpdateUfDTO } from '../dto/IUpdateUfDTO';
import { Uf } from '../entities/Uf';
import { UfRepository } from '../repository/UfRepository';

class UpdateUfService {
  async execute(codigoUf: number, { nome, sigla, status }: IUpdateUfDTO): Promise<Uf> {
    const ufRepository = getCustomRepository(UfRepository);

    const ufToUpdate = await ufRepository.findOne(codigoUf);

    if (!ufToUpdate) {
      throw new Error('Uf não encontrada');
    }

    ufRepository.merge(ufToUpdate, { nome, sigla, status });

    console.log(ufToUpdate);

    const uf = await ufRepository.save(ufToUpdate);

    return uf;
  }
}

export { UpdateUfService };
