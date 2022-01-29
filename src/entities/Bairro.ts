import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { Endereco } from './Endereco';
import { Municipio } from './Municipio';

@Entity('tb_bairro')
export class Bairro {
    @PrimaryGeneratedColumn({ name: 'codigo_bairro' })
      codigoBairro: number;

    @ManyToOne(() => Municipio, (municipio) => municipio.bairros)
    @JoinColumn({ name: 'codigo_municipio' })
      municipio: Municipio;

    @Column({ name: 'codigo_municipio' })
      codigoMunicipio: number;

    @Column()
      nome: string;

    @Column()
      status: number;

    @OneToMany(() => Endereco, (endereco) => endereco.bairro)
      enderecos: Endereco[];
}
