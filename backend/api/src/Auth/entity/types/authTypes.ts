import { IUser } from '../../../User/entity/types/userTypes';

export type Register = {
  input: Omit<IUser, '_id' | 'image' | 'createdAt' | 'updatedAt'>
};

export type RegisterService = Omit<IUser, '_id' | 'image' | 'createdAt' | 'updatedAt'>;

export type Login = {
  input: Omit<IUser, '_id' | 'name' | 'image' | 'role' | 'provider' | 'createdAt' | 'updatedAt'>
};
