import { model } from "mongoose";
import { ProductSchema } from "../schemas/productSchemas";
import { IProduct } from "../types/productTypes";

export const ProductModel = model<IProduct>('Product', ProductSchema);
