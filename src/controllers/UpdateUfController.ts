import { Request, Response } from 'express';

import { UpdateUfService } from '../services/ufService/UpdateUfService';

class UpdateUfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoUf } = request.params;
    const { nome, sigla, status } = request.body;

    const updateUfService = new UpdateUfService();

    const uf = await updateUfService.execute(
      Number(codigoUf),
      {
        nome,
        sigla,
        status,
      },
    );

    return response.json(uf);
  }
}

export { UpdateUfController };
