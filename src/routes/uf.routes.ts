import { Router } from 'express';

import { CreateUfController } from '../controllers/CreateUfController';
import { ListAllUfController } from '../controllers/ListAllUfController';

const ufRoutes = Router();

const createUfController = new CreateUfController();
const listAllUfController = new ListAllUfController();

ufRoutes.get('/', listAllUfController.handle);
ufRoutes.post('/', createUfController.handle);

export { ufRoutes };
