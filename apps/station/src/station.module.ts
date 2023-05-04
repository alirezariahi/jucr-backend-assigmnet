import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { DatabaseModule } from '@app/common';
import { StationRepository } from './station.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Station, StationSchema } from 'apps/station/src/schema/station.schema';
import mongoConfig from '../config/mongo.config';
import evvConfig from '../config/env.config';

@Module({
  imports: [
    evvConfig,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig],
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Station.name, schema: StationSchema }]),
  ],
  controllers: [StationController],
  providers: [StationService, StationRepository],
})
export class StationModule {}
