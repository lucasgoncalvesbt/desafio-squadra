import { EntityRepository, Repository } from 'typeorm';

import { Pessoa } from '../entities/Pessoa';

@EntityRepository(Pessoa)
class PessoaRepository extends Repository<Pessoa> {}

export { PessoaRepository };
