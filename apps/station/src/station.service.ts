import { Injectable } from '@nestjs/common';
import { Station } from './schema/station.schema';
import { Logger } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StationService {
  private readonly systemRunningMessage: string;
  protected readonly logger: Logger;
  protected readonly StationModel: Model<Station>;
  protected readonly connection: Connection;

  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Station.name) stationModel: Model<Station>,
    @InjectConnection() connection: Connection,
  ) {
    this.StationModel = stationModel;
    this.connection = connection;
    this.systemRunningMessage = `Service ${
      StationService.name
    } is up and running on port ${this.configService.get(
      'app.port',
    )} at ${new Date(Date.now())}`;
    this.logger = new Logger(StationService.name);
    this.logger.verbose(this.systemRunningMessage);
  }

  status(): string {
    return this.systemRunningMessage;
  }
}
