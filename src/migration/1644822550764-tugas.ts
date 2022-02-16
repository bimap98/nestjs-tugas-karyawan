import { MigrationInterface, QueryRunner } from 'typeorm';

export class tugas1644822550764 implements MigrationInterface {
  name = 'tugas1644822550764';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tugas" ("id_tugas" SERIAL NOT NULL, "judul" character varying NOT NULL, "description" character varying NOT NULL, "karyawanIdKaryawan" integer, CONSTRAINT "PK_5c734eb6c2b738e1770d478c7aa" PRIMARY KEY ("id_tugas"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "karyawan" ("id_karyawan" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_96ae0fb53d8955dc4ac0aed1820" PRIMARY KEY ("id_karyawan"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "tugas" ADD CONSTRAINT "FK_73ad9e3c7d24df5663973bf7222" FOREIGN KEY ("karyawanIdKaryawan") REFERENCES "karyawan"("id_karyawan") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tugas" DROP CONSTRAINT "FK_73ad9e3c7d24df5663973bf7222"`,
    );
    await queryRunner.query(`DROP TABLE "karyawan"`);
    await queryRunner.query(`DROP TABLE "tugas"`);
  }
}
