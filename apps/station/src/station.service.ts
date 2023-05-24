import { Injectable } from '@nestjs/common';
import { Station } from '@app/common/database/schema/station.schema';
import { Logger } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Resolver, Args, Query, Int } from '@nestjs/graphql';

@Injectable()
@Resolver((of) => Station)
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

  @Query((returns) => Station)
  async graphql(
    @Args('first', { type: () => Int }) first: number,
    @Args('after', { type: () => String, nullable: true }) after: string,
  ): Promise<any> {
    try {
      const totalCount = await this.StationModel.countDocuments().exec();
      const chargingStations = await this.StationModel.find({
        _id: after ? { $gt: after } : undefined,
      })
        .limit(first)
        .exec();

      return {
        totalCount,
        chargingStations,
      };
    } catch (error: any) {
      throw error;
    }
  }
}
