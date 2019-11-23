import {
  Resolver,
  Args,
  Query,
  // ResolveProperty,
  // Parent,
  Mutation,
} from '@nestjs/graphql';

import { UsersService } from '../services/users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async user(@Args('id') id: number) {
    return this.usersService.findOneById(id);
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

  // @ResolveProperty()
  // async projects(@Parent() user) {
  //   const { id } = user;
  //   return await this.usersService.findAllProjectsForUserId(id);
  // }
}
