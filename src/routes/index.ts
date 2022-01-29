import { Router } from 'express';

import { bairroRoutes } from './bairro.routes';
import { municipioRoutes } from './municipio.routes';
import { pessoaRoutes } from './pessoa.routes';
import { ufRoutes } from './uf.routes';

const router = Router();

router.use('/uf', ufRoutes);
router.use('/bairro', bairroRoutes);
router.use('/municipio', municipioRoutes);
router.use('/pessoa', pessoaRoutes);

export { router };
