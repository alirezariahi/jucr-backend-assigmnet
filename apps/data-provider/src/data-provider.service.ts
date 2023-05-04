import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateStationDataRequest } from './dto/create-station-request.dto';
import { DataProviderRepository } from './data-provider.repository';
import { GetNewStationsDataRequest } from './dto/get-new-stations-request.dto';

@Injectable()
export class DataProviderService {
  private readonly systemRunningMessage: string;

  protected readonly logger: Logger;

  constructor(
    private readonly configService: ConfigService,
    private readonly dataProviderRepository: DataProviderRepository,
  ) {
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
    const session = await this.dataProviderRepository.startTransaction();
    try {
      const newStation = await this.dataProviderRepository.create(request, {
        session,
      });
      await session.commitTransaction();
      return newStation;
    } catch (error) {
      await session.abortTransaction();
      this.logger.error(error);
      throw error;
    }
  }

  async getNewStations(request: GetNewStationsDataRequest) {
    return this.dataProviderRepository.find(request);
  }
}
