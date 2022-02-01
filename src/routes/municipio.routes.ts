import { Router } from 'express';

import { CreateMunicipioController } from '../controllers/municipioControllers/CreateMunicipioController';
import { DeleteMunicipioController } from '../controllers/municipioControllers/DeleteMunicipioController';
import { FindMunicipioController } from '../controllers/municipioControllers/FindMunicipioController';
import { UpdateMunicipioController } from '../controllers/municipioControllers/UpdateMunicipioController';

const municipioRoutes = Router();

const findMunicipioController = new FindMunicipioController();
const createMunicipioController = new CreateMunicipioController();
const updateMunicipioController = new UpdateMunicipioController();
const deleteMunicipioController = new DeleteMunicipioController();

municipioRoutes.get('/', findMunicipioController.handle);
municipioRoutes.post('/', createMunicipioController.handle);
municipioRoutes.put('/', updateMunicipioController.handle);
municipioRoutes.delete('/:codigoMunicipio', deleteMunicipioController.handle);

export { municipioRoutes };
