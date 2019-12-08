import { Schema } from 'mongoose';

export interface Bit {
  readonly _id: Schema.Types.ObjectId;
  readonly title: string;
  readonly bits: Bit[];
  readonly level: number;
  readonly isComplete: boolean;
}
