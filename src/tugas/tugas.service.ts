import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateTugasDto from './dto/createTugas.dto';
import Tugas from '../models/tugas.entity';
import { UpdateTugasDto } from './dto/updateTugas.dto';

@Injectable()
export class TugasService {
  constructor(
    @InjectRepository(Tugas)
    private tugasRepository: Repository<Tugas>,
  ) {}

  // find all
  getAllTugas() {
    return this.tugasRepository.find();
  }

  // find by id
  async getTugasById(id_tugas: number) {
    const tugas = await this.tugasRepository.findOne(id_tugas);
    if (tugas) {
      return tugas;
    }

    throw new HttpException('Tugas not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createTugas(tugas: CreateTugasDto) {
    const newTugas = await this.tugasRepository.create(tugas);
    await this.tugasRepository.save(newTugas);

    return newTugas;
  }

  // update
  async updateTugas(id_tugas: number, post: UpdateTugasDto) {
    await this.tugasRepository.update(id_tugas, post);
    const updatedTugas = await this.tugasRepository.findOne(id_tugas);
    if (updatedTugas) {
      return updatedTugas;
    }

    throw new HttpException('Tugas not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteTugas(id_tugas: number) {
    const deletedTugas = await this.tugasRepository.delete(id_tugas);
    if (!deletedTugas.affected) {
      throw new HttpException('Tugas not found', HttpStatus.NOT_FOUND);
    }
  }
}
