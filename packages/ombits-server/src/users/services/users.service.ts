import { Model, Schema } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../interfaces/user.interface';
import { CreateUserDTO } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(userData: CreateUserDTO): Promise<User> {
    const createdUser = new this.userModel(userData);
    return await createdUser.save();
  }

  async findOneById(_id: Schema.Types.ObjectId): Promise<User> {
    const user = await this.userModel.findOne({ _id });
    if (!user) {
      throw new NotFoundException('No user found for this ID');
    }
    return user;
  }
}
