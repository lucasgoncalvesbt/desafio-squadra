import { IUpdateEnderecoDTO } from './IUpdateEnderecoDTO';

interface IUpdatePessoaDTO {
    codigoPessoa: number;
    nome: string;
    sobrenome: string;
    idade: number;
    login: string;
    senha: string;
    status: number;
    enderecos: IUpdateEnderecoDTO[];
}

export { IUpdatePessoaDTO };
