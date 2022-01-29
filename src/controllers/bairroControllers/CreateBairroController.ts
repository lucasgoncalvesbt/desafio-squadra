import { Request, Response } from 'express';

import { CreateBairroService } from '../../services/bairroServices/CreateBairroService';

class CreateBairroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoMunicipio, nome, status } = request.body;

    const createBairroService = new CreateBairroService();

    const bairro = await createBairroService.execute({
      codigoMunicipio,
      nome,
      status,
    });

    return response.status(201).json(bairro);
  }
}

export { CreateBairroController };
