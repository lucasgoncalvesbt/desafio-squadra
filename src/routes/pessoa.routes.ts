import { Router } from 'express';

import { CreatePessoaController } from '../controllers/pessoaController/CreatePessoaController';
import { FindPessoaController } from '../controllers/pessoaController/FindPessoaController';

const pessoaRoutes = Router();

const createPessoaController = new CreatePessoaController();
const findPessoaController = new FindPessoaController();

pessoaRoutes.get('/', findPessoaController.handle);
pessoaRoutes.post('/', createPessoaController.handle);

export { pessoaRoutes };
