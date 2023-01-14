import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1673687939338 implements MigrationInterface {
    name = 'createTables1673687939338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`firstName\` varchar(255) NULL,
                \`lastName\` varchar(255) NULL,
                UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            CREATE TABLE \`post\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`caption\` varchar(255) NULL,
                \`userIdId\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
        await queryRunner.query(`
            ALTER TABLE \`post\`
            ADD CONSTRAINT \`FK_a218a3bf8f54282a66d6245b939\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_a218a3bf8f54282a66d6245b939\`
        `);
        await queryRunner.query(`
            DROP TABLE \`post\`
        `);
        await queryRunner.query(`
            DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\`
        `);
        await queryRunner.query(`
            DROP TABLE \`user\`
        `);
    }

}
