import * as mongoose from 'mongoose';

export const BitSchema = new mongoose.Schema();

BitSchema.add({
  title: { type: String, required: true },
  bits: { type: [BitSchema], default: [] },
  level: { type: Number, required: true },
  isComplete: { type: Boolean, default: false },
});
