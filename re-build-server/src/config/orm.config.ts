import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const ormConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: configService.get<any>('DB_TYPE', 'postgres123'),
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: configService.get<number>('DB_PORT', 5432),
  username: configService.get<string>('DB_USERNAME', 'postgres'),
  password: configService.get<string>('DB_PASSWORD', 'password'),
  database: configService.get<string>('DB_DATABASE', 'your_database_name'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: configService.get<boolean>('DB_SYNCHRONIZE', false),
});
