import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Service_helper } from '../service.helper';


@Controller('auth')
export class AuthServiceController {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly client_proxy: ClientProxy,
    private readonly service_helper: Service_helper,
  ) { }

  @Get('ping')
  public getProfile() {
    return this.service_helper.sendCmd(
      this.client_proxy.send({ cmd: 'ping' }, ''),
    );
  }
}
