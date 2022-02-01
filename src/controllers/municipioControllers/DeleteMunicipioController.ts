import { Request, Response } from 'express';

import { DeleteMunicipioService } from '../../services/municipioServices/DeleteMunicipioService';

class DeleteMunicipioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoMunicipio } = request.params;

    const deleteMunicipioService = new DeleteMunicipioService();
    const municipios = await deleteMunicipioService.execute(Number(codigoMunicipio));

    return response.json(municipios);
  }
}

export { DeleteMunicipioController };
