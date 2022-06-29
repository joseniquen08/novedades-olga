import { model } from 'mongoose';
import { UserSchema } from '../schemas/userSchemas';
import { IUser } from '../types/userTypes';

export const UserModel = model<IUser>('User', UserSchema);
