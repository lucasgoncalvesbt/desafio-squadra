import { Router } from 'express';

import { CreateUfController } from '../controllers/ufControllers/CreateUfController';
import { ListAllUfController } from '../controllers/ufControllers/FindUfController';
import { UpdateUfController } from '../controllers/ufControllers/UpdateUfController';

const ufRoutes = Router();

const createUfController = new CreateUfController();
const listAllUfController = new ListAllUfController();
const updateUfController = new UpdateUfController();

ufRoutes.get('/', listAllUfController.handle);
ufRoutes.post('/', createUfController.handle);
ufRoutes.put('/:codigoUf', updateUfController.handle);

export { ufRoutes };
