import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  image: string;
  role: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UpdateNameUser = {
  input: Omit<IUser, '_id' | 'password' | 'image' | 'role' | 'provider' | 'createdAt' | 'updatedAt'>
}

export type UpdatePasswordUser = {
  input: Omit<IUser, '_id' | 'name' | 'image' | 'role' | 'provider' | 'createdAt' | 'updatedAt'>
}

export type UpdateImageUser = {
  input: Omit<IUser, '_id' | 'name' | 'password' | 'role' | 'provider' | 'createdAt' | 'updatedAt'>
}
