import { Controller, Get } from '@nestjs/common';
import { DynamoService } from './dynamo-service.service';

@Controller('dynamo')
export class DynamoController {
  constructor(private readonly dynamoService: DynamoService) {}

  @Get('tables')
  async listTables(): Promise<string[]> {
    return this.dynamoService.listTables();
  }

  @Get('create-table')
  async createTable(): Promise<void> {
    return this.dynamoService.createTable();
  }
}
