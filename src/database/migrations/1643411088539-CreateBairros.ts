import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBairros1643411088539 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_bairro',
        columns: [
          {
            name: 'codigo_bairro',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',

          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'codigo_municipio',
            type: 'integer',
          },
          {
            name: 'status',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_bairro_municipio',
            columnNames: ['codigo_municipio'],
            referencedTableName: 'tb_municipio',
            referencedColumnNames: ['codigo_municipio'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_bairro');
  }
}
