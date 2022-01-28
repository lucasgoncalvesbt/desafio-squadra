import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMunicipios1643410587722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_municipio',
        columns: [
          {
            name: 'codigo_municipio',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'codigo_uf',
            type: 'integer',
          },
          {
            name: 'status',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_municipio_uf',
            columnNames: ['codigo_uf'],
            referencedTableName: 'tb_uf',
            referencedColumnNames: ['codigo_uf'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_municipio');
  }
}
