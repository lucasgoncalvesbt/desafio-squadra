import { Router } from 'express';

import { CreatePessoaController } from '../controllers/pessoaController/CreatePessoaController';
import { FindPessoaController } from '../controllers/pessoaController/FindPessoaController';
import { UpdatePessoaController } from '../controllers/pessoaController/UpdatePessoaController';

const pessoaRoutes = Router();

const findPessoaController = new FindPessoaController();
const createPessoaController = new CreatePessoaController();
const updatePessoaController = new UpdatePessoaController();

pessoaRoutes.get('/', findPessoaController.handle);
pessoaRoutes.post('/', createPessoaController.handle);
pessoaRoutes.put('/:codigoPessoa', updatePessoaController.handle);

export { pessoaRoutes };
