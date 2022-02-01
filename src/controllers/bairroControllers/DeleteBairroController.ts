import { Request, Response } from 'express';

import { DeleteBairroService } from '../../services/bairroServices/DeleteBairroService';

class DeleteBairroController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoBairro } = request.params;

    const deleteBairroService = new DeleteBairroService();
    const bairros = await deleteBairroService.execute(Number(codigoBairro));

    return response.json(bairros);
  }
}

export { DeleteBairroController };
