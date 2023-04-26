import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import { Consumer } from 'kafka-node';

@Controller('microservice')
export class MicroserviceController { }
