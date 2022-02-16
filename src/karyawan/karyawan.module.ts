import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Karyawan from '../models/karyawan.entity';
import { KaryawanService } from './karyawan.service';
import { KaryawanController } from './karyawan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Karyawan])],
  controllers: [KaryawanController],
  providers: [KaryawanService],
})
export class KaryawanModule {}
