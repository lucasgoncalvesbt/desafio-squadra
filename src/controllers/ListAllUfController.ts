import { Request, Response } from 'express';

import { ListAllUfService } from '../services/ListAllUfService';

class ListAllUfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllUfService = new ListAllUfService();

    const ufs = await listAllUfService.execute();

    return response.status(200).json(ufs);
  }
}

export { ListAllUfController };
