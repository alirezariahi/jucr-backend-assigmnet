// seeds/seeds.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StationDataSeed } from './station-data.seed';
import { StationData, StationDataSchema } from '../schema/station-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StationData.name, schema: StationDataSchema },
    ]),
  ],
  providers: [StationDataSeed],
  exports: [StationDataSeed],
})
export class SeedsModule {}
