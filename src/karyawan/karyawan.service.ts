import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateKaryawanDto from './dto/createKaryawan.dto';
import Karyawan from '../models/karyawan.entity';
import { UpdateKaryawanDto } from './dto/updateKaryawan.dto';

@Injectable()
export class KaryawanService {
  constructor(
    @InjectRepository(Karyawan)
    private karyawanRepository: Repository<Karyawan>,
  ) {}

  // find all
  getAllKaryawan() {
    return this.karyawanRepository.find();
  }

  // find by id
  async getKaryawanById(id_karyawan: number) {
    const karyawan = await this.karyawanRepository.findOne(id_karyawan);
    if (karyawan) {
      return karyawan;
    }

    throw new HttpException('Karyawan not found', HttpStatus.NOT_FOUND);
  }

  // create
  async createKaryawan(karyawan: CreateKaryawanDto) {
    const newKaryawan = await this.karyawanRepository.create(karyawan);
    await this.karyawanRepository.save(newKaryawan);

    return newKaryawan;
  }

  // update
  async updateKaryawan(id_karyawan: number, post: UpdateKaryawanDto) {
    await this.karyawanRepository.update(id_karyawan, post);
    const updatedKaryawan = await this.karyawanRepository.findOne(id_karyawan);
    if (updatedKaryawan) {
      return updatedKaryawan;
    }

    throw new HttpException('Karyawan not found', HttpStatus.NOT_FOUND);
  }

  // delete
  async deleteKaryawan(id_karyawan: number) {
    const deletedKaryawan = await this.karyawanRepository.delete(id_karyawan);
    if (!deletedKaryawan.affected) {
      throw new HttpException('Karyawan not found', HttpStatus.NOT_FOUND);
    }
  }
}
