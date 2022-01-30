import { Request, Response } from 'express';

import { FindByCodigoPessoaService } from '../../services/pessoaServices/FindByCodigoPessoaService';
import { ListAllPessoaService } from '../../services/pessoaServices/ListAllPessoaService';

class FindPessoaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoPessoa } = request.query;

    const listAllPessoaService = new ListAllPessoaService();
    const findByCodigoPessoaService = new FindByCodigoPessoaService();

    if (codigoPessoa) {
      const pessoa = await findByCodigoPessoaService.execute(Number(codigoPessoa));
      return response.status(200).json(pessoa);
    }

    const pessoas = await listAllPessoaService.execute();
    return response.status(200).json(pessoas);
  }
}

export { FindPessoaController };
