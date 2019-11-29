import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../graphql';
import { User as UserEntity } from '../entities/user.entity';
import { CreateUserDTO } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create({ firstName, lastName }: CreateUserDTO): Promise<User> {
    const user = new UserEntity();
    user.firstName = firstName;
    user.lastName = lastName;
    return await this.userRepository.save(user);
  }

  async findOneById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('No user found for this ID');
    }
    return user;
  }
}
