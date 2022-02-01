import { Request, Response } from 'express';

import { DeleteUfService } from '../../services/ufServices/DeleteUfService';

class DeleteUfController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoUF } = request.params;

    const deleteUfService = new DeleteUfService();
    const ufs = await deleteUfService.execute(Number(codigoUF));

    return response.json(ufs);
  }
}

export { DeleteUfController };
