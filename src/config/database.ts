import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config';

export const dbConfig = {
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  dbName: DB_NAME,
};

export const DB_URI = `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}`;
