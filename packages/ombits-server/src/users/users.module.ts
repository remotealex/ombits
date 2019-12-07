import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';
import { UserSchema } from './schemas/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
