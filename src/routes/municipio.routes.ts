import { Router } from 'express';

import { CreateMunicipioController } from '../controllers/municipioControllers/CreateMunicipioController';
import { FindMunicipioController } from '../controllers/municipioControllers/FindMunicipioController';

const municipioRoutes = Router();

const createMunicipioController = new CreateMunicipioController();
const findMunicipioController = new FindMunicipioController();

municipioRoutes.post('/', createMunicipioController.handle);
municipioRoutes.get('/', findMunicipioController.handle);

export { municipioRoutes };
