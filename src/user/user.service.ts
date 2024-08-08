import { Injectable } from '@nestjs/common';
import { UserModel } from './model/user.model';

@Injectable()
export class UserService {
  async create(name: string, email: string) {
    const user = await UserModel.create({ id: '1', name, email });
    return user;
  }
}
