import { Router } from 'express';

import { CreateBairroController } from '../controllers/bairroControllers/CreateBairroController';
import { FindBairroController } from '../controllers/bairroControllers/FindBairroController';

const bairroRoutes = Router();

const createBairroController = new CreateBairroController();
const findBairroController = new FindBairroController();

bairroRoutes.get('/', findBairroController.handle);
bairroRoutes.post('/', createBairroController.handle);

export { bairroRoutes };
