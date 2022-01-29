import { EntityRepository, Repository } from 'typeorm';

import { Uf } from '../entities/Uf';

@EntityRepository(Uf)
class UfRepository extends Repository<Uf> {}

export { UfRepository };
