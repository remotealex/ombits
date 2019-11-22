import {
  Resolver,
  Args,
  Query,
  ResolveProperty,
  Parent,
  Mutation,
} from '@nestjs/graphql';

import { AppService } from '../app.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly usersService: AppService,
    private readonly projectsService: AppService,
  ) {}

  @Query()
  async user(@Args('id') id: number) {
    return this.usersService.findOneById(id);
  }

  @Mutation()
  async updateFirstName(
    @Args('id') id: number,
    @Args('firstName') firstName: string,
  ) {
    return await this.usersService.updateFirstName(id, firstName);
  }

  @ResolveProperty()
  async projects(@Parent() user) {
    const { id } = user;
    return await this.projectsService.findAllProjectsForUserId(id);
  }
}
