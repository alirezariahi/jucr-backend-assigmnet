import { Module } from '@nestjs/common';
import { DataProviderController } from './data-provider.controller';
import { DataProviderService } from './data-provider.service';
import { DataProviderRepository } from './data-provider.repository';
import { DatabaseModule } from '@app/common';
import {
  StationData,
  StationDataSchema,
} from 'apps/data-provider/src/schema/station-data.schema';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from '../config/mongo.config';
import evvConfig from '../config/env.config';
import appConfig from '../config/app.config';
import { SeedsModule } from './seed/seeds.module';

@Module({
  imports: [
    evvConfig,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig, appConfig],
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: StationData.name, schema: StationDataSchema },
    ]),
    SeedsModule,
  ],
  controllers: [DataProviderController],
  providers: [DataProviderService, DataProviderRepository],
})
export class DataProviderModule {}
