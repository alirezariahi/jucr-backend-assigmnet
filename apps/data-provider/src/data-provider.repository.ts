import { Injectable, Logger } from '@nestjs/common';
import { StationData } from 'apps/data-provider/src/schema/station-data.schema';
import { AbstractRepository } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class DataProviderRepository extends AbstractRepository<StationData> {
  protected readonly logger = new Logger(DataProviderRepository.name);

  constructor(
    @InjectModel(StationData.name) stationModel: Model<StationData>,
    @InjectConnection() connection: Connection,
  ) {
    super(stationModel, connection);
  }
}
