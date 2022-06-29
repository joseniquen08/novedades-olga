import { Schema } from "mongoose";
import { IUser } from '../types/userTypes';

export const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'client',
    enum: ['client', 'admin'],
  },
  provider: {
    type: String,
    default: 'local',
    enum: ['local', 'google', 'facebook'],
  },
}, {
  timestamps: true,
});

UserSchema.post('save', function (error: any, doc: any, next: any) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    next(new Error('duplicate key'));
  } else {
    next();
  }
});
