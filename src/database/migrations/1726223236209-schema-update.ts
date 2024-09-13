import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1726223236209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Seedowanie postaci
        await queryRunner.query(
          `INSERT INTO characters (id, name, description) VALUES 
            (1, 'John Doe', 'Main character of the show'), 
            (2, 'Jane Smith', 'Supporting character')`
        );

        // Seedowanie odcinków
        await queryRunner.query(
          `INSERT INTO episodes (id, title, episode_number, air_date, description) VALUES 
            (1, 'Episode 1', 1, '2024-01-01', 'The first episode'), 
            (2, 'Episode 2', 2, '2024-01-08', 'The second episode')`
        );

        // Seedowanie cytatów - z użyciem `episode_id`
        await queryRunner.query(
          `INSERT INTO quotes (id, quote_text, youtube_link, timestamp, episode_id) VALUES 
            (1, 'This is a quote', 'https://youtube.com/example1', 60, 1), 
            (2, 'Another quote', 'https://youtube.com/example2', 120, 2)`
        );

        // Seedowanie tagów
        await queryRunner.query(
          `INSERT INTO tags (id, tag_name) VALUES 
            (1, 'Funny'), 
            (2, 'Dramatic')`
        );

        // Seedowanie quote_tags
        await queryRunner.query(
          `INSERT INTO quote_tags (id, quote_id, tag_id) VALUES 
            (1, 1, 1), 
            (2, 2, 2)`
        );

        // Seedowanie quote_characters
        await queryRunner.query(
          `INSERT INTO quote_characters (id, quote_id, character_id) VALUES 
            (1, 1, 1), 
            (2, 2, 2)`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Usunięcie danych
        await queryRunner.query(`DELETE FROM quote_characters`);
        await queryRunner.query(`DELETE FROM quote_tags`);
        await queryRunner.query(`DELETE FROM quotes`);
        await queryRunner.query(`DELETE FROM tags`);
        await queryRunner.query(`DELETE FROM episodes`);
        await queryRunner.query(`DELETE FROM characters`);
    }
}
