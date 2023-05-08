import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
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
      throw error;
    }
  }

  @Post('/new-stations/:skip/:limit/:apiKey')
  async getNewStations(
    @Param('apiKey') apiKey: string,
    @Param('skip') skip: string,
    @Param('limit') limit: string,
    @Body() req: GetNewStationsDataRequest,
  ) {
    try {
      if (!apiKey || apiKey !== 'ff82541f-c8d1-4507-be67-bd07e3259c4e')
        throw new Error('Invalid API Key');

      return await this.dataProviderService.getNewStations(
        req,
        parseInt(skip),
        parseInt(limit),
      );
    } catch (error: any) {
      throw error;
    }
  }
}
