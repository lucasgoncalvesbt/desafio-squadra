import { Request, Response } from 'express';

import { CreateUfService } from '../services/ufService/CreateUfService';

class CreateUfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, sigla, status } = request.body;

    const createUfService = new CreateUfService();

    const uf = await createUfService.execute({
      nome,
      sigla,
      status,
    });

    return response.status(201).json(uf);
  }
}

export { CreateUfController };
