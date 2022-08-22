import { AddCategory } from '../../src/Category/entity/types/categoryTypes';
import { addCategoryService, getAllCategoriesService } from '../../src/Category/services/categoryServices';

const queries = {
  getAllCategories: async () => {
    try {
      return await getAllCategoriesService();
    } catch (error: any) {
      return {
        errors: { message: error.message }
      };
    }
  }
}

const mutations = {
  addCategory: async (_: any, { input }: AddCategory) => {
    try {
      return await addCategoryService(input);
    } catch (error: any) {
      return {
        errors: { message: error.message }
      };
    }
  }
}

export const resolvers = { queries, mutations };
