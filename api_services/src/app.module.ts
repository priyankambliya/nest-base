import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceHandlerModule } from "./service-handler";

@Module({
  imports: [ServiceHandlerModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
