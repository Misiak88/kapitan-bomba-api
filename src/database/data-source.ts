import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  dropSchema: false,
  //logging: ['error', 'query', 'schema'],
  entities: ['src/api/entities/*.entities.ts'],
  migrations: ['src/database/migrations/**/*.ts'],
  migrationsTableName: 'migration_table',
});
