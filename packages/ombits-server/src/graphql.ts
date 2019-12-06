
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IMutation {
    abstract create(firstName: string, lastName: string): User | Promise<User>;

    abstract updateProjectName(_id: string, projectName: string): User | Promise<User>;
}

export abstract class IQuery {
    abstract user(_id: string): User | Promise<User>;
}

export class User {
    _id: string;
    firstName?: string;
    lastName?: string;
    projectName?: string;
}
