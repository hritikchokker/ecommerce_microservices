import { Inject, Injectable } from '@nestjs/common';
import { Kafka, Message } from 'kafkajs';
@Injectable()
export class AppService {
  constructor(@Inject('KAFKA') private kafka: Kafka) {
    // this.connectKafka();
  }

  async connectKafka(): Promise<void> {
    const consumer = this.kafka.consumer({ groupId: 'my-group' });
    await consumer.connect();

    console.log('connected to kafka instance');
  }

  async getHello(): Promise<string> {
    // const consumer = this.kafka.consumer({ groupId: 'my-group' });
    // await consumer.connect();
    // console.log('connected to kafka');
    // await consumer.subscribe({ topic: 'my-topic' });
    // await consumer.run({
    //   eachMessage: async ({ topic, partition, message }) => {
    //     console.log({
    //       value: message.value.toString(),
    //     });
    //   },
    // });

    return 'Hello World!';
  }
}
