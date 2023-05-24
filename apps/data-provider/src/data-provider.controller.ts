import { Controller, Get, Logger } from '@nestjs/common';
import { DataProviderService } from './data-provider.service';

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
}
