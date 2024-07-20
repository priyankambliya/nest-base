import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from "@nestjs/common";

async function server() {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(6789);
}
server();
