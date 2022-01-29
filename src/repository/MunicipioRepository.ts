import { EntityRepository, Repository } from 'typeorm';

import { Municipio } from '../entities/Municipio';

@EntityRepository(Municipio)
class MunicipioRepository extends Repository<Municipio> {}

export { MunicipioRepository };
