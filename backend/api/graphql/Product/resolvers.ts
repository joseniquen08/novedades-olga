import { AddProduct } from '../../src/Product/entity/types/productTypes';
import { addProductService, getAllProductsService, getProductsByTagService } from '../../src/Product/services/productServices';

const queries = {
  getAllProducts: async () => {
    try {
      return await getAllProductsService();
    } catch (error: any) {
      return {
        errors: { message:  error.message }
      }
    }
  },
  getProductsByTag: async (_: any, { tag }: { tag: string }) => {
    try {
      return await getProductsByTagService(tag);
    } catch (error: any) {
      return {
        errors: { message:  error.message }
      }
    }
  }
}

const mutations = {
  addProduct: async (_: any, { input }: AddProduct) => {
    try {
      return await addProductService(input);
    } catch (error: any) {
      return {
        errors: { message:  error.message }
      }
    }
  }
}

export const resolvers = { queries, mutations };
