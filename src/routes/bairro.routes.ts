import { Router } from 'express';

import { CreateBairroController } from '../controllers/bairroControllers/CreateBairroController';
import { FindBairroController } from '../controllers/bairroControllers/FindBairroController';
import { UpdateBairroController } from '../controllers/bairroControllers/UpdateBairroController';

const bairroRoutes = Router();

const findBairroController = new FindBairroController();
const createBairroController = new CreateBairroController();
const updateBairroController = new UpdateBairroController();

bairroRoutes.get('/', findBairroController.handle);
bairroRoutes.post('/', createBairroController.handle);
bairroRoutes.put('/:codigoBairro', updateBairroController.handle);

export { bairroRoutes };
