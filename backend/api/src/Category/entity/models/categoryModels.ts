import { model } from "mongoose";
import { CategorySchema } from "../schemas/categorySchemas";
import { ICategory } from "../types/categoryTypes";

export const CategoryModel = model<ICategory>('Category', CategorySchema);
