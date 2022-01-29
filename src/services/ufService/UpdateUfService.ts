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

    ufRepository.merge(ufToUpdate, { nome, sigla, status });

    const uf = await ufRepository.save(ufToUpdate);

    return uf;
  }
}

export { UpdateUfService };
