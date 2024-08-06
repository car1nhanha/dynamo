import { Module } from '@nestjs/common';
import { DynamoService } from './dynamo-service.service';
import { DynamoController } from './dynamo.controller';

@Module({
  providers: [DynamoService],
  controllers: [DynamoController],
})
export class DynamoModule {}
