import { Types } from "mongoose";

export interface ICategory {
  _id: Types.ObjectId;
  name: string;
  tag: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export type AddCategory = {
  input: Omit<ICategory, '_id' | 'status' | 'createdAt' | 'updatedAt'>
}

export type AddCategoryService = Omit<ICategory, '_id' | 'status' | 'createdAt' | 'updatedAt'>;
