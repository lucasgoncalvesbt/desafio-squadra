import { Router } from 'express';

import { CreatePessoaController } from '../controllers/pessoaController/CreatePessoaController';

const pessoaRoutes = Router();

const createPessoaController = new CreatePessoaController();

pessoaRoutes.post('/', createPessoaController.handle);

export { pessoaRoutes };
