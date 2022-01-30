import { Request, Response } from 'express';

import { UpdateMunicipioService } from '../../services/municipioServices/UpdateMunicipioService';

class UpdateMunicipioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoMunicipio } = request.params;
    const { codigoUF, nome, status } = request.body;

    const updateMunicipioService = new UpdateMunicipioService();

    const municipio = await updateMunicipioService.execute({
      codigoMunicipio: Number(codigoMunicipio),
      codigoUF,
      nome,
      status,
    });

    return response.status(200).json(municipio);
  }
}

export { UpdateMunicipioController };
