import { Request, Response } from 'express';

import { ICreatePessoaDTO } from '../../dto/ICreatePessoaDTO';
import { CreatePessoaService } from '../../services/pessoaServices/CreatePessoaService';

class CreatePessoaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      nome, sobrenome, idade, login, senha, status, enderecos,
    } = request.body as ICreatePessoaDTO;

    const createPessoaService = new CreatePessoaService();

    const pessoa = await createPessoaService.execute({
      nome,
      sobrenome,
      idade,
      login,
      senha,
      status,
      enderecos,
    });

    return response.status(201).json(pessoa);
  }
}

export { CreatePessoaController };
