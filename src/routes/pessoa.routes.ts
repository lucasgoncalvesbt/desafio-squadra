import { Router } from 'express';

import { CreatePessoaController } from '../controllers/pessoaController/CreatePessoaController';
import { DeletePessoaController } from '../controllers/pessoaController/DeletePessoaController';
import { FindPessoaController } from '../controllers/pessoaController/FindPessoaController';
import { UpdatePessoaController } from '../controllers/pessoaController/UpdatePessoaController';

const pessoaRoutes = Router();

const findPessoaController = new FindPessoaController();
const createPessoaController = new CreatePessoaController();
const updatePessoaController = new UpdatePessoaController();
const deletePessoaController = new DeletePessoaController();

pessoaRoutes.get('/', findPessoaController.handle);
pessoaRoutes.post('/', createPessoaController.handle);
pessoaRoutes.put('/', updatePessoaController.handle);
pessoaRoutes.delete('/:codigoPessoa', deletePessoaController.handle);

export { pessoaRoutes };
