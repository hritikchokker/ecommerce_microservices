import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config(); // load environment variables


const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_DATABASE_PORT,
    username: process.env.POSTGRES_DATABASE_USER,
    password: process.env.POSTGRES_DATABASE_PASSWORD,
    database: process.env.POSTGRES_DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};

export default typeOrmConfig;
