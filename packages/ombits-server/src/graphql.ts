
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IMutation {
    abstract createProject(title: string): Project | Promise<Project>;

    abstract updateProjectTitle(_id: string, title: string): Project | Promise<Project>;

    abstract createUser(firstName: string, lastName: string): User | Promise<User>;
}

export class Project {
    _id: string;
    title: string;
}

export abstract class IQuery {
    abstract project(_id: string): Project | Promise<Project>;

    abstract projects(): Project[] | Promise<Project[]>;

    abstract user(_id: string): User | Promise<User>;
}

export class User {
    _id: string;
    firstName?: string;
    lastName?: string;
}
