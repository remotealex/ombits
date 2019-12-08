import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';

import { ProjectsService } from '../services/projects.service';
import { Schema } from 'mongoose';

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
}
