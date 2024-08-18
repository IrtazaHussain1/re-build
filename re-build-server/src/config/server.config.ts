import { ConfigService } from '@nestjs/config';

export const serverConfig = (configService: ConfigService) => ({
  port: configService.get<number>('SERVER_PORT', 3002),
  prefix: configService.get<string>('SERVER_PREFIX', ''),
});

export type ServerConfig = ReturnType<typeof serverConfig>;
