import { DB_URI, dbConfig } from '@config/database';
import { MongoClient } from 'mongodb';
import database, { Database } from './database';

export class Connection {
  public client?: MongoClient;

  public database?: Database;

  public async connect() {
    if (this.client) {
      return;
    } else {
      try {
        this.client = await MongoClient.connect(DB_URI, {});
        const mongoDB = await this.client.db(dbConfig.dbName);
        this.database = database.setDatabase(mongoDB);
        console.log('Database connected');
      } catch (error) {
        console.log(error);
      }
    }
  }
}

const connection = new Connection();

export default connection;
