import { ApiProperty } from '@nestjs/swagger';

export class UpdateKaryawanDto {
  @ApiProperty()
  id_karyawan: number;

  @ApiProperty()
  name: string;
}

export default UpdateKaryawanDto;
