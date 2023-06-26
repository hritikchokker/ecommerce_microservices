import { Module } from '@nestjs/common';
import { KafkaModule } from './kafka.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './shared/services/typeorm.service';
import { getEnvPath } from './common/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}`).replace('/products/dist', '');

console.log(envFilePath, 'file path');

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    KafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
