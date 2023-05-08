import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateStationDataRequest } from './dto/create-station-request.dto';
import { GetNewStationsDataRequest } from './dto/get-new-stations-request.dto';
import { StationData } from './schema/station-data.schema';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DataProviderService {
  private readonly systemRunningMessage: string;
  protected readonly logger: Logger;
  protected readonly StationDataModel: Model<StationData>;
  protected readonly connection: Connection;

  constructor(
    private readonly configService: ConfigService,
    @InjectModel(StationData.name) stationDataModel: Model<StationData>,
    @InjectConnection() connection: Connection,
  ) {
    this.StationDataModel = stationDataModel;
    this.connection = connection;
    this.systemRunningMessage = `Service ${
      DataProviderService.name
    } is up and running on port ${this.configService.get(
      'app.port',
    )} at ${new Date(Date.now())}`;
    this.logger = new Logger(DataProviderService.name);
    this.logger.verbose(this.systemRunningMessage);
  }

  status(): string {
    return this.systemRunningMessage;
  }

  async createStation(request: CreateStationDataRequest) {
    try {
      const newStation = await new this.StationDataModel({
        ...request,
        _id: uuid(),
      }).save();
      return newStation;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async getNewStations(
    request: GetNewStationsDataRequest,
    skip = 0,
    limit = 10,
  ) {
    try {
      let query: any;
      if (request.lastUpdate) {
        query = {
          $gte: { createdAt: new Date(request.lastUpdate) },
        };
      } else if (request.lastStation) {
        const lastStation: StationData = await this.StationDataModel.findOne({
          _id: request.lastStation,
        });

        query = {
          $gte: { createdAt: lastStation.createdAt },
        };
      } else {
        query = {};
      }

      const data: StationData[] = await this.StationDataModel.find(query)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

      return data;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
