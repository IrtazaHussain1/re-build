import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { serverConfig, ServerConfig } from './config/server.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SessionMiddleware } from './middleware';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const isLoggerEnabled = process.env.LOG_ENABLED;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  if (isLoggerEnabled) {
    const logger = app.get(Logger);
    app.useLogger(logger);
    app.flushLogs();
  }

  const configService = app.get(ConfigService);
  const config: ServerConfig = serverConfig(configService);

  app.setGlobalPrefix(config.prefix);
  app.use(SessionMiddleware());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  );

  app.enableCors();

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Re Build')
    .setDescription('Re Build Application')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${config.prefix}/api`, app, document);

  await app.listen(config.port);
}

bootstrap();
