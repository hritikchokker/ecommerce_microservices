import { Controller, Get, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
@Controller()
export class AppController implements OnModuleInit, OnModuleDestroy {

  // @Client({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: ['localhost:9092'],
  //     },
  //   },
  // })
  // private readonly client: ClientKafka;

  constructor(private readonly appService: AppService) {}

  async onModuleInit() {
    // const requestPatterns = [
    //   'math.sum.sync.kafka.message',
    //   'math.sum.sync.without.key',
    //   'math.sum.sync.plain.object',
    //   'math.sum.sync.array',
    //   'math.sum.sync.string',
    //   'math.sum.sync.number',
    //   'user.create',
    //   'business.create',
    // ];

    // requestPatterns.forEach((pattern: any) => {
    //   this.client.subscribeToResponseOf(pattern);
    // });

    // await this.client.connect();
  }

  async onModuleDestroy() {
    // await this.client.close();
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
