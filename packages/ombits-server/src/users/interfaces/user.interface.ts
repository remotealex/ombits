import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}
