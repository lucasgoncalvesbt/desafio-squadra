import { Router } from 'express';

import { CreateBairroController } from '../controllers/bairroControllers/CreateBairroController';

const bairroRoutes = Router();

const createBairroController = new CreateBairroController();

bairroRoutes.post('/', createBairroController.handle);

export { bairroRoutes };
