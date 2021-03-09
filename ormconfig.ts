import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'otriumuser',
  password: 'otrium@123',
  database: 'otrium_db',
  synchronize: false,
  logging: true,
  entities: [
    'src/models/**/*.model.ts'
  ],
  migrations: [
    'src/migrations/**/*.ts'
  ],
  subscribers: [
    'src/subscribers/**/*.ts'
  ],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers'
  }
}

export = config;