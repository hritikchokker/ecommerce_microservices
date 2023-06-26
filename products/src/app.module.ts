import { Module } from '@nestjs/common';
import { KafkaModule } from './kafka.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from './shared/services/typeorm.service';
import { getEnvPath } from './common/env.helper';
import { FeaturesModule } from './features/features.module';

const envFilePath: string =
  getEnvPath(`${__dirname}`).split('products')[0] + '.env';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    KafkaModule,
    FeaturesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
