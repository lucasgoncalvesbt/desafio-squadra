import { getCustomRepository } from 'typeorm';

import { IUpdateUfDTO } from '../../dto/IUpdateUfDTO';
import { Uf } from '../../entities/Uf';
import { AppError } from '../../errors/AppError';
import { UfRepository } from '../../repository/UfRepository';

class UpdateUfService {
  async execute(codigoUf: number, { nome, sigla, status }: IUpdateUfDTO): Promise<Uf> {
    const ufRepository = getCustomRepository(UfRepository);

    const ufToUpdate = await ufRepository.findOne(codigoUf);

    if (!ufToUpdate) {
      throw new AppError('Não existe nenhuma UF com esse código', 404);
    }

    const ufWithNameExists = await ufRepository.createQueryBuilder()
      .where('LOWER(nome) = LOWER(:nome)', { nome })
      .getOne();

    const ufWithSiglaExists = await ufRepository.createQueryBuilder()
      .where('LOWER(sigla) = LOWER(:sigla)', { sigla })
      .getOne();

    if (ufWithNameExists && ufToUpdate.codigoUF !== ufWithNameExists.codigoUF) {
      throw new AppError('Já existe uma UF com esse nome.');
    }

    if (ufWithSiglaExists && ufToUpdate.codigoUF !== ufWithSiglaExists.codigoUF) {
      throw new AppError('Já existe uma UF com essa sigla.');
    }

    ufRepository.merge(ufToUpdate, { nome, sigla, status });

    const uf = await ufRepository.save(ufToUpdate);

    return uf;
  }
}

export { UpdateUfService };
