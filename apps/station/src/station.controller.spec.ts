import { Test, TestingModule } from '@nestjs/testing';
import { StationController } from './station.controller';
import { StationService } from './station.service';

describe('StationController', () => {
  let stationController: StationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StationController],
      providers: [StationService],
    }).compile();

    stationController = app.get<StationController>(StationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(stationController.status()).toBe('Hello World!');
    });
  });
});
