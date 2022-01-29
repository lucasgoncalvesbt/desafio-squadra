import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUfs1643409553150 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_uf',
        columns: [
          {
            name: 'codigo_uf',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'sigla',
            type: 'varchar',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_uf');
  }
}
