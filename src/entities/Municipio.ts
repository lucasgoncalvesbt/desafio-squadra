import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { Bairro } from './Bairro';
import { Uf } from './Uf';

@Entity('tb_municipio')
export class Municipio {
    @PrimaryGeneratedColumn({ name: 'codigo_municipio' })
      codigoMunicipio: number;

    @ManyToOne(() => Uf, (uf) => uf.municipios)
    @JoinColumn({ name: 'codigo_uf' })
      uf: Uf;

    @Column({ name: 'codigo_uf' })
      codigoUF: number;

    @Column()
      nome: string;

    @Column()
      status: number;

    @OneToMany(() => Bairro, (bairro) => bairro.municipio)
      bairros: Bairro[];
}
