import { Module } from '@nestjs/common';
import { DataProviderController } from './data-provider.controller';
import { DataProviderService } from './data-provider.service';
import { DatabaseModule } from '@app/common';
import {
  Station,
  StationSchema,
} from '@app/common/database/schema/station.schema';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from '../config/mongo.config';
import evvConfig from '../config/env.config';
import appConfig from '../config/app.config';

@Module({
  imports: [
    evvConfig,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig, appConfig],
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: Station.name,
        schema: StationSchema,
      },
    ]),
  ],
  controllers: [DataProviderController],
  providers: [DataProviderService],
})
export class DataProviderModule {}
