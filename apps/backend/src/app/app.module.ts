import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'firebird',
      host: '127.0.0.1',
      username: 'FTOLIVEIRA',
      password: 'tew93uj8',
      database: 'localhost:C:/caminho/do/banco/dados.fdb',
      port: 3050,
      // logging: true,
      // synchronize: true,
      // entities: [UserEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
