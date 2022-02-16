import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Tugas from '../models/tugas.entity';
import { TugasService } from './tugas.service';
import { TugasController } from './tugas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tugas])],
  controllers: [TugasController],
  providers: [TugasService],
})
export class TugasModule {}
