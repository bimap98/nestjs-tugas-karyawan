import { ApiProperty } from '@nestjs/swagger';
import CreateKaryawanDto from '../../karyawan/dto/createKaryawan.dto';

export class CreateTugasDto {
  @ApiProperty()
  judul: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  karyawan: CreateKaryawanDto;
}

export default CreateTugasDto;
