import { Router } from 'express';

import { CreateUfController } from '../controllers/CreateUfController';

const ufRoutes = Router();

const createUfController = new CreateUfController();

ufRoutes.post('/', createUfController.handle);

export { ufRoutes };
