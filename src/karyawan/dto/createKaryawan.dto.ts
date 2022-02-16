import { ApiProperty } from '@nestjs/swagger';

export class CreateKaryawanDto {
  @ApiProperty()
  id_karyawan: number;

  @ApiProperty()
  name: string;
}

export default CreateKaryawanDto;
