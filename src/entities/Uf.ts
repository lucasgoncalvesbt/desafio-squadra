import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';

import { Municipio } from './Municipio';

@Entity('tb_uf')
export class Uf {
    @PrimaryGeneratedColumn()
      codigoUF: string;

    @Column()
      sigla: string;

    @Column()
      nome: string;

    @Column()
      status: number;

    @OneToMany(() => Municipio, (municipio) => municipio.uf)
      municipios: Municipio[];
}
