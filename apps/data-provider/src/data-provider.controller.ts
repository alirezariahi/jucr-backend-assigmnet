import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { DataProviderService } from './data-provider.service';
import { CreateStationDataRequest } from './dto/create-station-request.dto';
import { GetNewStationsDataRequest } from './dto/get-new-stations-request.dto';

@Controller()
export class DataProviderController {
  protected readonly logger: Logger;

  constructor(private readonly dataProviderService: DataProviderService) {
    this.logger = new Logger(DataProviderService.name);
  }

  @Get()
  status(): string {
    return this.dataProviderService.status();
  }

  @Post()
  async createStation(@Body() req: CreateStationDataRequest) {
    try {
      return await this.dataProviderService.createStation(req);
    } catch (error: any) {
      error(error);
    }
  }

  @Post('/new-stations')
  async getNewStations(@Body() req: GetNewStationsDataRequest) {
    try {
      return await this.dataProviderService.getNewStations(req);
    } catch (error: any) {
      error(error);
    }
  }
}
