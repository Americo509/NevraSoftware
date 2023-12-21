/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['x-auth-token'],
      credentials: true,
      optionsSuccessStatus: 204,
      maxAge: 86400,
      preflightContinue: false,
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Nevra')
    .setDescription(
      'Prototype of a new sell screen for the company Nevra, using NestJS and Angular'
    )
    .setVersion('1.0')
    .addTag('CookShow')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
