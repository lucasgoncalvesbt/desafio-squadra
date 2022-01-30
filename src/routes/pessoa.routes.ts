import { Router } from 'express';

import { DeletePessoaController } from '../controllers/bairroControllers/DeletePessoaController';
import { CreatePessoaController } from '../controllers/pessoaController/CreatePessoaController';
import { FindPessoaController } from '../controllers/pessoaController/FindPessoaController';
import { UpdatePessoaController } from '../controllers/pessoaController/UpdatePessoaController';

const pessoaRoutes = Router();

const findPessoaController = new FindPessoaController();
const createPessoaController = new CreatePessoaController();
const updatePessoaController = new UpdatePessoaController();
const deletePessoaController = new DeletePessoaController();

pessoaRoutes.get('/', findPessoaController.handle);
pessoaRoutes.post('/', createPessoaController.handle);
pessoaRoutes.put('/:codigoPessoa', updatePessoaController.handle);
pessoaRoutes.delete('/:codigoPessoa', deletePessoaController.handle);

export { pessoaRoutes };
