import { Request, Response } from 'express';

import { UpdateBairroService } from '../../services/bairroServices/UpdateBairroService';

class UpdateBairroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      codigoBairro, codigoMunicipio, nome, status,
    } = request.body;

    const updateBairroService = new UpdateBairroService();

    const bairro = await updateBairroService.execute({
      codigoBairro: Number(codigoBairro),
      codigoMunicipio,
      nome,
      status,
    });

    return response.status(200).json(bairro);
  }
}

export { UpdateBairroController };
