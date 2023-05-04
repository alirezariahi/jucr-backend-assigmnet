import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StationData } from '../schema/station-data.schema';

@Injectable()
export class StationDataSeed {
  protected readonly logger = new Logger(StationDataSeed.name);

  constructor(
    @InjectModel(StationData.name) private stationDataModel: Model<StationData>,
  ) {}

  async seed(): Promise<void> {
    const existingData = await this.stationDataModel.findOne().exec();

    if (existingData) {
      this.logger.verbose('Data already exists. Skipping seed.');
      return;
    }

    const sampleData = [
      {
        operatorInfo: 'Operator 1',
        statusType: 'Operational',
        addressInfo: '1234 Station St, Anytown, USA',
        connections: ['A', 'B', 'C'],
      },
      {
        operatorInfo: 'Operator 2',
        statusType: 'Under Maintenance',
        addressInfo: '5678 Charger Ln, Anytown, USA',
        connections: ['D', 'E', 'F'],
      },
      {
        operatorInfo: 'Operator 3',
        statusType: 'Operational',
        addressInfo: '9101 Electric Ave, Anytown, USA',
        connections: ['G', 'H', 'I'],
      },
    ];

    try {
      await this.stationDataModel.insertMany(sampleData);
      this.logger.log('Station data seed successfully inserted');
    } catch (error) {
      this.logger.error('Error inserting station data seed', error);
    }
  }
}
