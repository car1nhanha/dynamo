import { Module } from '@nestjs/common';
import { DynamooseModule } from 'nestjs-dynamoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoModule } from './dynamo/dynamo.module';

@Module({
  imports: [DynamooseModule.forRoot(), DynamoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
