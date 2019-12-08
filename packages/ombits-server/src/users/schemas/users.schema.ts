import * as mongoose from 'mongoose';

// TODO: Improve schema with requireds etc
export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
  },
  { timestamps: true },
);
