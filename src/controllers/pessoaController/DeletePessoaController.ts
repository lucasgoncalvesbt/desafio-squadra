import { Request, Response } from 'express';

import { DeletePessoaService } from '../../services/pessoaServices/DeletePessoaService';

class DeletePessoaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoPessoa } = request.params;

    const deletePessoaService = new DeletePessoaService();
    const pessoas = await deletePessoaService.execute(Number(codigoPessoa));

    return response.json(pessoas);
  }
}

export { DeletePessoaController };
