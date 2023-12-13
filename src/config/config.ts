import dotenv from 'dotenv';
dotenv.config();

const {
  JWT_SECRET = 'dev-secret',
  DB_USER = 'admin',
  DB_PASSWORD = 'admin',
  DB_HOST = '127.0.0.1',
  DB_PORT = '27017',
  DB_NAME = '',
  PORT = 3000,
} = process.env;

export { JWT_SECRET, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, PORT };
export const MAX_FILE_SIZE = 50 * 1024 * 1024;
