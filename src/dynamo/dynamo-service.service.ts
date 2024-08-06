import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class DynamoService {
  private dynamoDB: AWS.DynamoDB;

  constructor() {
    this.dynamoDB = new AWS.DynamoDB({
      region: 'us-east-1',
      endpoint: 'http://localhost:4566',
      accessKeyId: 'test',
      secretAccessKey: 'test',
    });
  }

  async listTables(): Promise<string[]> {
    const result = await this.dynamoDB.listTables().promise();
    return result.TableNames;
  }

  async createTable(): Promise<void> {
    const params = {
      TableName: 'TestTable',
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' }, // Partition key
      ],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    };

    try {
      await this.dynamoDB.createTable(params).promise();
      console.log('Table created successfully');
    } catch (error) {
      console.error('Error creating table:', error);
    }
  }
}
