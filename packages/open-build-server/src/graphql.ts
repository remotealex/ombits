
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IMutation {
    abstract updateFirstName(id: number, firstName: string): User | Promise<User>;
}

export class Project {
    id: number;
    name?: string;
}

export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;
}

export class User {
    id: number;
    firstName?: string;
    lastName?: string;
    projects?: Project[];
}
