import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateKaryawanDto from './dto/createKaryawan.dto';
import { KaryawanService } from './karyawan.service';
import { UpdateKaryawanDto } from './dto/updateKaryawan.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Karyawan")

@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly karyawanService: KaryawanService) {}

  // get all karyawan
  @Get()
  getKaryawan() {
    return this.karyawanService.getAllKaryawan();
  }

  // get karyawan by id
  @Get(':id')
  getKaryawanById(@Param('id') id_karyawan: string) {
    return this.karyawanService.getKaryawanById(Number(id_karyawan));
  }

  // create karyawan
  @Post()
  async createTodo(@Body() karyawan: CreateKaryawanDto) {
    return this.karyawanService.createKaryawan(karyawan);
  }

  // update karyawan
  @Put(':id')
  async updatePost(
    @Param('id') id_karyawan: string,
    @Body() karyawan: UpdateKaryawanDto,
  ) {
    return this.karyawanService.updateKaryawan(Number(id_karyawan), karyawan);
  }

  //delete karyawan
  @Delete(':id')
  async deleteTodo(@Param('id') id_karyawan: string) {
    this.karyawanService.deleteKaryawan(Number(id_karyawan));
  }
}
