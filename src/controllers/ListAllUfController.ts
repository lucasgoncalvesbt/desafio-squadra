import { Request, Response } from 'express';

import { FindUfByCodigoService } from '../services/ufServices/FindUfByCodigoService';
import { FindUfBySiglaService } from '../services/ufServices/FindUfBySiglaService';
import { ListAllUfService } from '../services/ufServices/ListAllUfService';

class ListAllUfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoUf, sigla } = request.query;
    const listAllUfService = new ListAllUfService();
    const findUfByCodigoService = new FindUfByCodigoService();
    const findUfBySiglaService = new FindUfBySiglaService();

    if (codigoUf) {
      const uf = await findUfByCodigoService.execute(Number(codigoUf));
      return response.json(uf);
    }

    if (!codigoUf && sigla) {
      const uf = await findUfBySiglaService.execute(String(sigla));
      return response.json(uf);
    }

    const ufs = await listAllUfService.execute();
    return response.status(200).json(ufs);
  }
}

export { ListAllUfController };
