import { Model, Schema } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Project } from '../interfaces/project.interface';
import { CreateProjectDTO } from '../dto/create-project.dto';
import { Bit } from '../interfaces/bit.interface';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<Project>,
  ) {}

  async create({ title }: CreateProjectDTO): Promise<Project> {
    const createdProject = new this.projectModel({ title });
    return await createdProject.save();
  }

  async findAll(): Promise<Project[]> {
    return await this.projectModel.find({});
  }

  async findOne(_id: Schema.Types.ObjectId): Promise<Project> {
    return await this.projectModel.findOne({ _id });
  }

  async updateTitle(
    _id: Schema.Types.ObjectId,
    title: string,
  ): Promise<Project> {
    const updatedProject = await this.projectModel.findOneAndUpdate(
      { _id },
      { $set: { title } },
      { new: true }, // Return updated
    );
    return updatedProject;
  }

  async updateBits(_id: Schema.Types.ObjectId, bits: Bit[]): Promise<Project> {
    const updatedProject = await this.projectModel.findOneAndUpdate(
      { _id },
      { $set: { bits } },
      { new: true }, // Return updated
    );
    console.log(updatedProject);
    return updatedProject;
  }
}
