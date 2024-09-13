import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1726223121814 implements MigrationInterface {
    name = 'SchemaUpdate1726223121814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`episodes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`episode_number\` int NOT NULL, \`air_date\` date NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`characters\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quote_characters\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quote_id\` int NULL, \`character_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quotes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quote_text\` text NOT NULL, \`youtube_link\` varchar(255) NULL, \`timestamp\` bigint NOT NULL, \`episode_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`quote_tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quote_id\` int NULL, \`tag_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tags\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tag_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`quote_characters\` ADD CONSTRAINT \`FK_4f2b2a4ab950b5c0c9cca3a1d0b\` FOREIGN KEY (\`quote_id\`) REFERENCES \`quotes\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`quote_characters\` ADD CONSTRAINT \`FK_6fca14599f2758fdccccaaed640\` FOREIGN KEY (\`character_id\`) REFERENCES \`characters\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`quotes\` ADD CONSTRAINT \`FK_60a8d735219758f176538318322\` FOREIGN KEY (\`episode_id\`) REFERENCES \`episodes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quote_tags\` ADD CONSTRAINT \`FK_2968b353c4746c0b333ab549f87\` FOREIGN KEY (\`quote_id\`) REFERENCES \`quotes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`quote_tags\` ADD CONSTRAINT \`FK_406f99785a120062ce6ab551b93\` FOREIGN KEY (\`tag_id\`) REFERENCES \`tags\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`quote_tags\` DROP FOREIGN KEY \`FK_406f99785a120062ce6ab551b93\``);
        await queryRunner.query(`ALTER TABLE \`quote_tags\` DROP FOREIGN KEY \`FK_2968b353c4746c0b333ab549f87\``);
        await queryRunner.query(`ALTER TABLE \`quotes\` DROP FOREIGN KEY \`FK_60a8d735219758f176538318322\``);
        await queryRunner.query(`ALTER TABLE \`quote_characters\` DROP FOREIGN KEY \`FK_6fca14599f2758fdccccaaed640\``);
        await queryRunner.query(`ALTER TABLE \`quote_characters\` DROP FOREIGN KEY \`FK_4f2b2a4ab950b5c0c9cca3a1d0b\``);
        await queryRunner.query(`DROP TABLE \`tags\``);
        await queryRunner.query(`DROP TABLE \`quote_tags\``);
        await queryRunner.query(`DROP TABLE \`quotes\``);
        await queryRunner.query(`DROP TABLE \`quote_characters\``);
        await queryRunner.query(`DROP TABLE \`characters\``);
        await queryRunner.query(`DROP TABLE \`episodes\``);
    }

}
