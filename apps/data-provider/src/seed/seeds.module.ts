/**
This is a module file named "seeds.module.ts" that is importing and exporting a NestJS module. 
The file imports the following modules:
Module from @nestjs/common: This is the primary module decorator that declares a module and its properties. 
MongooseModule from @nestjs/mongoose: This module is used to provide integration between NestJS and Mongoose ODM for MongoDB.
StationDataSeed from ./station-data.seed: This is a custom provider used to seed the MongoDB database with station data.
StationData and StationDataSchema from ../schema/station-data.schema: These are the class and schema used to represent station 
data in the MongoDB database.
The SeedsModule class is decorated with the @Module decorator and contains the following properties:
imports: This property specifies the modules that this module imports. Here it is importing the MongooseModule with the 
StationData model and schema.
providers: This property specifies the providers that will be available within the module. In this case, it is providing the 
StationDataSeed provider.
exports: This property specifies the providers that will be available outside of the module. In this case, it is exporting 
the StationDataSeed provider.
The purpose of this module is to provide a way to seed the MongoDB database with station data by defining a custom provider 
and importing the MongooseModule.
*/
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
