import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { KafkaService } from './microservice/kafka.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern({ cmd: 'ping' })
  async ping(@Payload() message: any) {
    console.log(message);
    return { response: 'pong' };
  }
  constructor(
    private readonly appService: AppService,
    private readonly kafkaService: KafkaService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
