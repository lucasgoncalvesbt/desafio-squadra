import { getCustomRepository } from 'typeorm';

import { ICreateUfDTO } from '../../dto/ICreateUfDTO';
import { Uf } from '../../entities/Uf';
import { AppError } from '../../errors/AppError';
import { UfRepository } from '../../repository/UfRepository';

class CreateUfService {
  async execute({ nome, sigla, status }: ICreateUfDTO): Promise<Uf> {
    const ufRepository = getCustomRepository(UfRepository);

    const ufWithNameExists = await ufRepository.createQueryBuilder()
      .where('LOWER(nome) = LOWER(:nome)', { nome })
      .getOne();

    const ufWithSiglaExists = await ufRepository.createQueryBuilder()
      .where('LOWER(sigla) = LOWER(:sigla)', { sigla })
      .getOne();

    if (ufWithNameExists) {
      throw new AppError('Já existe uma UF com esse nome.');
    }

    if (ufWithSiglaExists) {
      throw new AppError('Já existe uma UF com essa sigla.');
    }

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
