import { Types } from "mongoose";

export interface IProduct {
  _id: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  totalRating: number;
  createdAt: Date;
  updatedAt: Date;
}

export type AddProduct = {
  input: Omit<IProduct, '_id' | 'rating' | 'totalRating' | 'createdAt' | 'updatedAt'>
}

export type AddProductService = Omit<IProduct, '_id' | 'rating' | 'totalRating' | 'createdAt' | 'updatedAt'>;
