import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import Tugas from './tugas.entity';

@Entity()
export class Karyawan {
  @PrimaryColumn()
  id_karyawan: number;

  @Column()
  name: string;

  @OneToMany(() => Tugas, (tugas) => tugas.karyawan)
  tugas: Tugas[];
}

export default Karyawan;
