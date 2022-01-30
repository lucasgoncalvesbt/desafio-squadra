import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';

import { Bairro } from './Bairro';
import { Pessoa } from './Pessoa';

@Entity('tb_endereco')
export class Endereco {
    @PrimaryGeneratedColumn({ name: 'codigo_endereco' })
      codigoEndereco: number;

    @ManyToOne(() => Pessoa, (pessoa) => pessoa.enderecos)
    @JoinColumn({ name: 'codigo_pessoa' })
      pessoa: Pessoa;

    @Column({ name: 'codigo_pessoa' })
      codigoPessoa: number;

    @ManyToOne(() => Bairro, (bairro) => bairro.enderecos)
    @JoinColumn({ name: 'codigo_bairro' })
      bairro: Bairro;

    @Column({ name: 'codigo_bairro' })
      codigoBairro: number;

    @Column({ name: 'nome_rua' })
      nomeRua: string;

    @Column()
      numero: string;

    @Column()
      complemento: string;

    @Column()
      cep: string;
}
