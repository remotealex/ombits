import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { Schema } from 'mongoose';

import { UsersService } from '../services/users.service';
import { ProjectsService } from '../../projects/services/projects.service';

@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly projectsService: ProjectsService,
  ) {}

  @Query('user')
  async getUser(@Args('_id') _id: Schema.Types.ObjectId) {
    return this.usersService.findOneById(_id);
  }

  @Mutation()
  async createUser(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
  ) {
    return await this.usersService.create({
      firstName,
      lastName,
    });
  }

  @ResolveProperty('projects')
  async getProjects(@Parent() { _id }) {
    return await this.projectsService.findAll();
  }
}
