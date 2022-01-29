import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { Endereco } from './Endereco';

@Entity('tb_pessoa')
export class Pessoa {
    @PrimaryGeneratedColumn()
      codigoPessoa: number;

    @Column()
      nome: string;

    @Column()
      sobrenome: string;

    @Column()
      idade: number;

    @Column()
      login: string;

    @Column()
      senha: string;

    @Column()
      status: number;

    @OneToMany(() => Endereco, (endereco) => endereco.pessoa)
      enderecos: Endereco[];
}
