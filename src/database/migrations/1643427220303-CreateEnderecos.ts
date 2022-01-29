import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEnderecos1643427220303 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_endereco',
        columns: [
          {
            name: 'codigo_endereco',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'codigo_pessoa',
            type: 'integer',
          },
          {
            name: 'codigo_bairro',
            type: 'integer',
          },
          {
            name: 'nome_rua',
            type: 'varchar',
          },
          {
            name: 'numero',
            type: 'varchar',
          },
          {
            name: 'complemento',
            type: 'varchar',
          },
          {
            name: 'cep',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_endereco_pessoa',
            columnNames: ['codigo_pessoa'],
            referencedTableName: 'tb_pessoa',
            referencedColumnNames: ['codigo_pessoa'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_endereco_bairro',
            columnNames: ['codigo_bairro'],
            referencedTableName: 'tb_bairro',
            referencedColumnNames: ['codigo_bairro'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tb_endereco');
  }
}
