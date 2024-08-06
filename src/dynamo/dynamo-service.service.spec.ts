import { Test, TestingModule } from '@nestjs/testing';
import { DynamoServiceService } from './dynamo-service.service';

describe('DynamoServiceService', () => {
  let service: DynamoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamoServiceService],
    }).compile();

    service = module.get<DynamoServiceService>(DynamoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
