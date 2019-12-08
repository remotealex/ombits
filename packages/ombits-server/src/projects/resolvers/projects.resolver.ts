import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { Schema } from 'mongoose';

import { ProjectsService } from '../services/projects.service';
import { Bit } from '../interfaces/bit.interface';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Query('project')
  async getProject(@Args('_id') _id: Schema.Types.ObjectId) {
    return this.projectsService.findOne(_id);
  }

  @Query('projects')
  async getProjects() {
    return this.projectsService.findAll();
  }

  @Mutation()
  async createProject(@Args('title') title: string) {
    return await this.projectsService.create({
      title,
    });
  }

  @Mutation()
  async updateProjectTitle(
    @Args('_id') _id: Schema.Types.ObjectId,
    @Args('title') title: string,
  ) {
    return await this.projectsService.updateTitle(_id, title);
  }

  @Mutation()
  async updateProjectBits(
    @Args('_id') _id: Schema.Types.ObjectId,
    @Args('bits') bits: Bit[],
  ) {
    return await this.projectsService.updateBits(_id, bits);
  }
}
