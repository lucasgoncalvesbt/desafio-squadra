import { Router } from 'express';

import { CreateUfController } from '../controllers/ufControllers/CreateUfController';
import { DeleteUfController } from '../controllers/ufControllers/DeleteUfController';
import { ListAllUfController } from '../controllers/ufControllers/FindUfController';
import { UpdateUfController } from '../controllers/ufControllers/UpdateUfController';

const ufRoutes = Router();

const createUfController = new CreateUfController();
const listAllUfController = new ListAllUfController();
const updateUfController = new UpdateUfController();
const deleteUfController = new DeleteUfController();

ufRoutes.get('/', listAllUfController.handle);
ufRoutes.post('/', createUfController.handle);
ufRoutes.put('/', updateUfController.handle);
ufRoutes.delete('/:codigoUF', deleteUfController.handle);

export { ufRoutes };
