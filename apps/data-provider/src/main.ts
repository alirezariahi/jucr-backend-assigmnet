import { NestFactory } from '@nestjs/core';
import { DataProviderModule } from './data-provider.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StationDataSeed } from './seed/station-data.seed';

async function bootstrap() {
  const app = await NestFactory.create(DataProviderModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('app.port'));
  const stationDataSeed = app.get(StationDataSeed);
  await stationDataSeed.seed();
}
bootstrap();
