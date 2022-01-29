import { Router } from 'express';

import { CreateUfController } from '../controllers/CreateUfController';
import { ListAllUfController } from '../controllers/ListAllUfController';
import { UpdateUfController } from '../controllers/UpdateUfController';

const ufRoutes = Router();

const createUfController = new CreateUfController();
const listAllUfController = new ListAllUfController();
const updateUfController = new UpdateUfController();

ufRoutes.get('/', listAllUfController.handle);
ufRoutes.post('/', createUfController.handle);
ufRoutes.put('/:codigoUf', updateUfController.handle);

export { ufRoutes };
