import { Module } from '@nestjs/common';
import { DynamooseModule } from 'src/dynamoose/dynamoose.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DynamooseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
