import mongoose from 'mongoose';

export class MongoService {
  private db_host: string;
  private db_port: number;
  private db_name: string;
  private db_user: string;
  private db_pass: string;
  private db_url: string;
  constructor(
    db_name: string,
    db_user: string,
    db_pass: string,
    db_host: string,
    db_port: number
  ) {
    this.db_name = db_name;
    this.db_user = db_user;
    this.db_pass = db_pass;
    this.db_host = db_host;
    this.db_port = Number(db_port);
    this.db_url = `mongodb://${db_host}:${db_port}/${db_name}`;
  }

  async connect() {
    await mongoose
      .connect(this.db_url, {
        authSource: 'admin',
        auth: {
          username: this.db_user,
          password: this.db_pass,
        },
      })
      .then(() => console.log('✅ MongoDB connected 🔌📡🚀...'))
      .catch((err) => {
        console.group('❌ MongoDB connection error');
        console.log(err);
        console.groupEnd();
      });
  }
}
