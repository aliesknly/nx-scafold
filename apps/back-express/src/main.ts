/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { ApiService, MongoService } from './services';
const api = new ApiService();

api.addRoute('/api', (req, res) => {
  res.send({ message: 'Welcome to back-express!' });
});

const port = process.env.PORT || 3333;

const server = api.runService(Number(port));

server.on('error', console.error);
