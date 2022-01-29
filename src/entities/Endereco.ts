import {
  Column, Entity, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

import { Bairro } from './Bairro';
import { Pessoa } from './Pessoa';

@Entity('tb_endereco')
export class Endereco {
    @PrimaryGeneratedColumn()
      codigoEndereco: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.enderecos)
      pessoa: Pessoa;

    @Column()
      codigoPessoa: number;

    @ManyToOne(() => Bairro, (bairro) => bairro.enderecos)
      bairro: Bairro;

    @Column()
      codigoBairro: number;

    @Column()
      nomeRua: string;

    @Column()
      numero: string;

    @Column()
      complemento: string;

    @Column()
      cep: string;
}
