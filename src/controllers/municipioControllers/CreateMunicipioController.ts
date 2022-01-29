import { Request, Response } from 'express';

import { CreateMunicipioService } from '../../services/municipioServices/CreateMunicipioService';

class CreateMunicipioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoUF, nome, status } = request.body;

    const createMunicipioService = new CreateMunicipioService();

    const municipio = await createMunicipioService.execute({
      codigoUF,
      nome,
      status,
    });

    return response.status(201).json(municipio);
  }
}

export { CreateMunicipioController };
