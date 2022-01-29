import { getCustomRepository } from 'typeorm';

import { ICreateUfDTO } from '../dto/ICreateUfDTO';
import { Uf } from '../entities/Uf';
import { UfRepository } from '../repository/UfRepository';

class CreateUfService {
  async execute({ nome, sigla, status }: ICreateUfDTO): Promise<Uf> {
    const ufRepository = getCustomRepository(UfRepository);

    const uf = ufRepository.create({
      nome,
      sigla,
      status,
    });

    await ufRepository.save(uf);

    return uf;
  }
}

export { CreateUfService };
