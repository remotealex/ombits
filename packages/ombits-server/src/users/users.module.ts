import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';
import { UserSchema } from './schemas/users.schema';
import { ProjectsModule } from '../projects/projects.module';
import { ProjectsService } from '../projects/services/projects.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ProjectsModule,
  ],
  providers: [UsersService, UsersResolver, ProjectsService],
})
export class UsersModule {}
