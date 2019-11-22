import { Injectable } from '@nestjs/common';

import { User, Project } from './graphql';

@Injectable()
export class AppService {
  findOneById(id: number): User {
    if (id !== 1) {
      return null;
    }

    return { id: 1, firstName: 'Alex', lastName: 'Price' };
  }

  updateFirstName(id: number, firstName: string) {
    if (id !== 1) {
      return null;
    }

    return { id: 1, firstName, lastName: 'Price' };
  }

  findAllProjectsForUserId(userId: number): Project[] {
    return [{ id: 1, name: 'Project name' }];
  }
}
