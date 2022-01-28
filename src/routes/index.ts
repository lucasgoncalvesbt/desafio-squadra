import { Router } from 'express';

import { bairroRoutes } from './bairro.routes';
import { municipioRoutes } from './municipio.routes';
import { pessoaRoutes } from './pessoa.routes';
import { ufRoutes } from './uf.routes';

const route = Router();

route.use('/uf', ufRoutes);
route.use('/bairro', bairroRoutes);
route.use('/municipio', municipioRoutes);
route.use('/pessoa', pessoaRoutes);

export { route };
