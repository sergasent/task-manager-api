import { connectToDatabase } from './database';
import startServer from './requests';

export default async function startApplication() {
  connectToDatabase();
  startServer();
}
