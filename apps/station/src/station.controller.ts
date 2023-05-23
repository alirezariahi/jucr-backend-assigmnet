import { Controller, Get } from '@nestjs/common';
import { StationService } from './station.service';

@Controller()
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  status(): string {
    return this.stationService.status();
  }
}
