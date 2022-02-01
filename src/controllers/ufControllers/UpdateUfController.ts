import { Request, Response } from 'express';

import { UpdateUfService } from '../../services/ufServices/UpdateUfService';

class UpdateUfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      codigoUF, nome, sigla, status,
    } = request.body;

    const updateUfService = new UpdateUfService();

    const uf = await updateUfService.execute(
      Number(codigoUF),
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
