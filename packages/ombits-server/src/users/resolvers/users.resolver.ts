import {
  Resolver,
  Args,
  Query,
  // ResolveProperty,
  // Parent,
  Mutation,
} from '@nestjs/graphql';

import { UsersService } from '../services/users.service';
import { Schema } from 'mongoose';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async user(@Args('_id') _id: Schema.Types.ObjectId) {
    return this.usersService.findOneById(_id);
  }

  @Mutation()
  async create(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    return await this.usersService.create({
      firstName,
      lastName,
    });
  }

  @Mutation()
  async updateProjectName(
    @Args('_id') _id: Schema.Types.ObjectId,
    @Args('projectName') projectName: string,
  ) {
    return await this.usersService.updateProjectName(_id, projectName);
  }

  // @ResolveProperty()
  // async projects(@Parent() user) {
  //   const { id } = user;
  //   return await this.usersService.findAllProjectsForUserId(id);
  // }
}
