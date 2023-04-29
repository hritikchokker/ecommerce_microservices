import { Module } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Module({
    providers: [
        {
            provide: 'KAFKA',
            useFactory: async () => {
                const kafka = new Kafka({
                    clientId: 'my-app',
                    brokers: ['kafka:9092'],
                });
                return kafka;
            },
        },
    ],
    exports: ['KAFKA'],
})
export class KafkaModule { }
