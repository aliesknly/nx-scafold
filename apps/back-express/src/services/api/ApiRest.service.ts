import express, { Express, RequestHandler } from 'express';
import * as path from 'path';

export class ApiService {
  public app: Express;
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use('/assets', express.static(path.join(__dirname, 'assets')));
  }

  public addRoute(route: string, handler: RequestHandler) {
    this.app.use(route, handler);
  }

  public runService(port: number) {
    return this.app
      .listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
      })
  }
}
