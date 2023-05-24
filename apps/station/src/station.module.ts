import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StationController } from './station.controller';
import { StationService } from './station.service';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Station,
  StationSchema,
} from '@app/common/database/schema/station.schema';
import { GraphQLModule } from '@nestjs/graphql';
import mongoConfig from '../config/mongo.config';
import evvConfig from '../config/env.config';

@Module({
  imports: [
    evvConfig,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig],
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Station.name, schema: StationSchema }]),
  ],
  controllers: [StationController],
  providers: [StationService],
})
export class StationModule {}
