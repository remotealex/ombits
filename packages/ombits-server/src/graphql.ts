
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IMutation {
    abstract create(firstName: string, lastName: string): User | Promise<User>;
}

export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;
}

export class User {
    id: number;
    firstName?: string;
    lastName?: string;
}
