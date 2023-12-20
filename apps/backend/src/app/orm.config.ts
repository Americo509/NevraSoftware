import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: '123456',
  database: 'postgres',
  port: 5432,
  synchronize: true,
};
