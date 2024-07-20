import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthServiceController } from './controller/auth-service.controller';
import { Service_helper } from './service.helper';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: { port: 6001 },
      },
    ]),
  ],
  controllers: [
    AuthServiceController,
  ],
  providers: [Service_helper],
})
export class ServiceHandlerModule { }
