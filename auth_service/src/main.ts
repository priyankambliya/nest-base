import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { useContainer } from 'class-validator';

async function auth_service_server(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.TCP,
      options: { port: 6001 },
    },
    { inheritAppConfig: true },
  );
  await app.startAllMicroservices();
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(6001);
}

auth_service_server();
