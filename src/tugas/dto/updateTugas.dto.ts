import { ApiProperty } from '@nestjs/swagger';

export class UpdateTugasDto {
  @ApiProperty()
  id_tugas: number;

  @ApiProperty()
  judul: string;

  @ApiProperty()
  description: string;
}

export default UpdateTugasDto;
