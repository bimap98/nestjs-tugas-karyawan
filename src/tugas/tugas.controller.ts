import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateTugasDto from './dto/createTugas.dto';
import { TugasService } from './tugas.service';
import { UpdateTugasDto } from './dto/updateTugas.dto';
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Tugas")

@Controller('tugas')
export class TugasController {
  constructor(private tugasService: TugasService) {}

  // get all tugas
  @Get()
  getTugas() {
    return this.tugasService.getAllTugas();
  }

  // get tugas by id
  @Get(':id')
  getTugasById(@Param('id') id_tugas: string) {
    return this.tugasService.getTugasById(Number(id_tugas));
  }

  // create tugas
  @Post()
  async createTugas(@Body() tugas: CreateTugasDto) {
    return this.tugasService.createTugas(tugas);
  }

  // update tugas
  @Put(':id')
  async updatePost(
    @Param('id') id_tugas: string,
    @Body() tugas: UpdateTugasDto,
  ) {
    return this.tugasService.updateTugas(Number(id_tugas), tugas);
  }

  //delete todo
  @Delete(':id')
  async deleteTugas(@Param('id') id_tugas: string) {
    this.tugasService.deleteTugas(Number(id_tugas));
  }
}
