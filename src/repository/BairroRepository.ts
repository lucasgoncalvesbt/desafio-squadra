import { EntityRepository, Repository } from 'typeorm';

import { Bairro } from '../entities/Bairro';

@EntityRepository(Bairro)
class BairroRepository extends Repository<Bairro> {}

export { BairroRepository };
