import { Router } from 'express';

import { CreateMunicipioController } from '../controllers/municipioControllers/CreateMunicipioController';
import { FindMunicipioController } from '../controllers/municipioControllers/FindMunicipioController';
import { UpdateMunicipioController } from '../controllers/municipioControllers/UpdateMunicipioController';

const municipioRoutes = Router();

const findMunicipioController = new FindMunicipioController();
const createMunicipioController = new CreateMunicipioController();
const updateMunicipioController = new UpdateMunicipioController();

municipioRoutes.get('/', findMunicipioController.handle);
municipioRoutes.post('/', createMunicipioController.handle);
municipioRoutes.put('/:codigoMunicipio', updateMunicipioController.handle);

export { municipioRoutes };
