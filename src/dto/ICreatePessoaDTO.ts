import { ICreateEnderecoDTO } from './ICreateEnderecoDTO';

interface ICreatePessoaDTO {
    nome: string;
    sobrenome: string;
    idade: number;
    login: string;
    senha: string;
    status: number;
    enderecos: ICreateEnderecoDTO[];
}

export { ICreatePessoaDTO };
