import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Karyawan from './karyawan.entity';

@Entity()
export class Tugas {
  @PrimaryGeneratedColumn()
  id_tugas: number;

  @Column()
  judul: string;

  @Column()
  description: string;

  @ManyToOne(() => Karyawan, (karyawan) => karyawan.tugas)
  karyawan: Karyawan;
}

export default Tugas;
