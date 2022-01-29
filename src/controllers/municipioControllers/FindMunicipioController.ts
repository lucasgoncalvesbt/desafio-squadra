import { Request, Response } from 'express';

import { FindByCodigoMunicipioService } from '../../services/municipioServices/FindByCodigoMunicipioService';
import { FindByNomeMunicipioService } from '../../services/municipioServices/FindByNomeMunicipioService';
import { ListAllMunicipioService } from '../../services/municipioServices/ListAllMunicipioService';
import { ListByUfMunicipioService } from '../../services/municipioServices/ListByUfMunicipioService';

class FindMunicipioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoUF, codigoMunicipio, nome } = request.query;

    const listAllMunicipioService = new ListAllMunicipioService();
    const findByCodigoMunicipioService = new FindByCodigoMunicipioService();
    const listByUfMunicipioService = new ListByUfMunicipioService();
    const findByNomeMunicipioService = new FindByNomeMunicipioService();

    if (codigoMunicipio) {
      const municipio = await findByCodigoMunicipioService.execute(Number(codigoMunicipio));
      return response.json(municipio);
    }

    if (codigoUF) {
      const municipios = await listByUfMunicipioService.execute(Number(codigoUF));
      return response.json(municipios);
    }

    if (nome) {
      const municipio = await findByNomeMunicipioService.execute(String(nome));
      return response.json(municipio);
    }

    const municipios = await listAllMunicipioService.execute();
    return response.status(200).json(municipios);
  }
}

export { FindMunicipioController };
