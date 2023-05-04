import { Controller, Get } from '@nestjs/common';
import { StationService } from './station.service';

@Controller()
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  getHello(): string {
    return this.stationService.getHello();
  }
}
