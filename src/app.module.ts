import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamooseModule } from './dynamoose/dynamoose.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DynamooseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
