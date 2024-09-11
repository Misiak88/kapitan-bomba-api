import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1726092771439 implements MigrationInterface {
    name = 'SchemaUpdate1726092771439'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`quotes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quote_text\` text NOT NULL, \`youtube_link\` varchar(255) NULL, \`timestamp\` bigint NOT NULL, \`characterId\` int NULL, \`episodeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quote_tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quoteId\` int NULL, \`tagId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tag_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`quotes\` ADD CONSTRAINT \`FK_8750ef604bb346857d2e8b625a7\` FOREIGN KEY (\`characterId\`) REFERENCES \`characters\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quotes\` ADD CONSTRAINT \`FK_d33df59da49663842fb4c1e5457\` FOREIGN KEY (\`episodeId\`) REFERENCES \`episodes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quote_tags\` ADD CONSTRAINT \`FK_9c741f5d5194adb74b261ff0065\` FOREIGN KEY (\`quoteId\`) REFERENCES \`quotes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quote_tags\` ADD CONSTRAINT \`FK_eafac5f5fa165498c1ab83e8648\` FOREIGN KEY (\`tagId\`) REFERENCES \`tags\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quote_tags\` DROP FOREIGN KEY \`FK_eafac5f5fa165498c1ab83e8648\``);
        await queryRunner.query(`ALTER TABLE \`quote_tags\` DROP FOREIGN KEY \`FK_9c741f5d5194adb74b261ff0065\``);
        await queryRunner.query(`ALTER TABLE \`quotes\` DROP FOREIGN KEY \`FK_d33df59da49663842fb4c1e5457\``);
        await queryRunner.query(`ALTER TABLE \`quotes\` DROP FOREIGN KEY \`FK_8750ef604bb346857d2e8b625a7\``);
        await queryRunner.query(`DROP TABLE \`tags\``);
        await queryRunner.query(`DROP TABLE \`quote_tags\``);
        await queryRunner.query(`DROP TABLE \`quotes\``);
    }

}
