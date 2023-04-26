import { Injectable } from '@nestjs/common';
import { KafkaClient, Consumer } from 'kafka-node';

@Injectable()
export class KafkaService {
    private client: KafkaClient;
    private consumer: Consumer;

    constructor() {
        this.client = new KafkaClient({
            kafkaHost: 'localhost:9092',
        });
        this.consumer = new Consumer(
            this.client,
            [{ topic: 'test', partition: 0 }],
            {
                autoCommit: true,
            },
        );
        this.consumer.on('message', (message) => {
            console.log(message);
        });
    }
}
