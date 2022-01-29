import { Router } from 'express';

import { CreateMunicipioController } from '../controllers/CreateMunicipioController';

const municipioRoutes = Router();

const createMunicipioController = new CreateMunicipioController();

municipioRoutes.post('/', createMunicipioController.handle);

export { municipioRoutes };
