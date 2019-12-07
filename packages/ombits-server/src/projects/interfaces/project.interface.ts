import { Document } from 'mongoose';

export interface Project extends Document {
  readonly title: string;
}
