import { Document, Schema } from 'mongoose';

import { Bit } from './bit.interface';

export interface Project extends Document {
  readonly userId: Schema.Types.ObjectId;
  readonly title: string;
  readonly bits: Bit[];
  readonly isComplete: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
