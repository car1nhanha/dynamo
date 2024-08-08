import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async create() {
    return this.userService.create('John Doe', 'johndoe@gmail.com');
  }
}
