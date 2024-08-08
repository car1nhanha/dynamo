import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { Global, Module } from '@nestjs/common';
import * as dynamoose from 'dynamoose';

@Global()
@Module({
  providers: [
    {
      provide: 'DYNAMOOSE',
      useFactory: () => {
        const ddb = new DynamoDB({
          region: 'us-east-2',
          credentials: {
            accessKeyId: 'test',
            secretAccessKey: 'test',
          },
          endpoint: 'http://localhost:4566',
        });

        dynamoose.aws.ddb.set(ddb);
        return dynamoose;
      },
    },
  ],
  exports: ['DYNAMOOSE'],
})
export class DynamooseModule {}
