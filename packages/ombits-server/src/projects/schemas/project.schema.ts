import * as mongoose from 'mongoose';

import { BitSchema } from './bit.schema';

export const ProjectSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    bits: { type: [BitSchema], default: [] },
    isComplete: { type: Boolean, default: false },
  },
  { timestamps: true },
);
