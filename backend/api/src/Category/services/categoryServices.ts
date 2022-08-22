import { CategoryModel } from "../entity/models/categoryModels";
import { AddCategoryService } from "../entity/types/categoryTypes";

export const getAllCategoriesService = async () => {
  try {
    const categories = await CategoryModel.find({});
    return {
      categories,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const addCategoryService = async (input: AddCategoryService) => {
  try {
    const category = new CategoryModel(input);
    const newCategory = await category.save();
    if (!newCategory) throw new Error('error');
    return newCategory;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
