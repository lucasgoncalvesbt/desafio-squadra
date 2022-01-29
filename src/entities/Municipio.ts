import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { Bairro } from './Bairro';
import { Uf } from './Uf';

@Entity('tb_uf')
export class Municipio {
    @PrimaryGeneratedColumn()
      codigoMunicipio: number;

    @ManyToOne(() => Uf, (uf) => uf.municipios)
    @JoinColumn({ name: 'codigo_uf' })
      uf: Uf;

    @Column()
      codigoUF: number;

    @Column()
      nome: string;

    @Column()
      status: number;

    @OneToMany(() => Bairro, (bairro) => bairro.municipio)
      bairros: Bairro[];
}
