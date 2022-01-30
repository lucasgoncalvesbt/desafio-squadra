import { Request, Response } from 'express';

import { IUpdatePessoaDTO } from '../../dto/IUpdatePessoaDTO';
import { UpdatePessoaService } from '../../services/pessoaServices/UpdatePessoaService';

class UpdatePessoaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { codigoPessoa } = request.params;
    const {
      nome, sobrenome, idade, login, senha, status, enderecos,
    } = request.body as IUpdatePessoaDTO;

    const updatePessoaService = new UpdatePessoaService();

    const pessoa = await updatePessoaService.execute({
      codigoPessoa: Number(codigoPessoa),
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

export { UpdatePessoaController };
