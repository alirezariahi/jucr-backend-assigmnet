import { Test, TestingModule } from '@nestjs/testing';
import { DataProviderController } from './data-provider.controller';
import { DataProviderService } from './data-provider.service';

describe('DataProviderController', () => {
  let dataProviderController: DataProviderController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataProviderController],
      providers: [DataProviderService],
    }).compile();

    dataProviderController = app.get<DataProviderController>(
      DataProviderController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dataProviderController.status()).toBe('Hello World!');
    });
  });
});
