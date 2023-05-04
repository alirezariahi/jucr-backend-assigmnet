import { Injectable, Logger } from '@nestjs/common';
import { Station } from 'apps/station/src/schema/station.schema';
import { AbstractRepository } from '@app/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class StationRepository extends AbstractRepository<Station> {
  protected readonly logger = new Logger(StationRepository.name);

  constructor(
    @InjectModel(Station.name) stationModel: Model<Station>,
    @InjectConnection() connection: Connection,
  ) {
    super(stationModel, connection);
  }
}
