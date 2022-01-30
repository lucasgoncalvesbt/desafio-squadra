import { EntityRepository, Repository } from 'typeorm';

import { Endereco } from '../entities/Endereco';

@EntityRepository(Endereco)
class EnderecoRepository extends Repository<Endereco> {}

export { EnderecoRepository };
