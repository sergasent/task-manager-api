import connection from './connection';
import database from './database';

export function connectToDatabase() {
  connection.connect();
}

export { Connection, default as connection } from './connection';
export { Database } from './database';
export default database;
