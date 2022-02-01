import { Router } from 'express';

import { CreateBairroController } from '../controllers/bairroControllers/CreateBairroController';
import { DeleteBairroController } from '../controllers/bairroControllers/DeleteBairroController';
import { FindBairroController } from '../controllers/bairroControllers/FindBairroController';
import { UpdateBairroController } from '../controllers/bairroControllers/UpdateBairroController';

const bairroRoutes = Router();

const findBairroController = new FindBairroController();
const createBairroController = new CreateBairroController();
const updateBairroController = new UpdateBairroController();
const deleteBairroController = new DeleteBairroController();

bairroRoutes.get('/', findBairroController.handle);
bairroRoutes.post('/', createBairroController.handle);
bairroRoutes.put('/', updateBairroController.handle);
bairroRoutes.delete('/:codigoBairro', deleteBairroController.handle);

export { bairroRoutes };
