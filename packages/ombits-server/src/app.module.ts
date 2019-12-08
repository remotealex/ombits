import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLDateTime } from 'graphql-iso-date';
// import { join } from 'path';

import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: {
        Date: GraphQLDateTime,
      },
    }),
    UsersModule,
    ProjectsModule,
  ],
})
export class AppModule {}
