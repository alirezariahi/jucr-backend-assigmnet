import { NestFactory } from '@nestjs/core';
import { StationModule } from './station.module';

async function bootstrap() {
  const app = await NestFactory.create(StationModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });
  await app.listen(3000);
}
bootstrap();
