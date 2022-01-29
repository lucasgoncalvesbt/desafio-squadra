import { Request, Response } from 'express';

import { FindByCodigoBairroService } from '../../services/bairroServices/FindByCodigoBairroService';
import { ListAllBairroService } from '../../services/bairroServices/ListAllBairroService';
import { ListByMunicipioBairroService } from '../../services/bairroServices/ListByMunicipioBairroService';

class FindBairroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoMunicipio, codigoBairro } = request.query;

    const listAllBairroService = new ListAllBairroService();
    const findByCodigoBairroService = new FindByCodigoBairroService();
    const listByMunicipioBairroService = new ListByMunicipioBairroService();

    if (codigoBairro) {
      const bairro = await findByCodigoBairroService.execute(Number(codigoBairro));
      return response.json(bairro);
    }

    if (codigoMunicipio) {
      const bairros = await listByMunicipioBairroService.execute(Number(codigoMunicipio));
      return response.json(bairros);
    }

    const bairros = await listAllBairroService.execute();
    return response.json(bairros);
  }
}

export { FindBairroController };
