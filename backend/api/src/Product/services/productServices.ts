import { ProductModel } from "../entity/models/productModels";
import { AddProductService } from "../entity/types/productTypes";

export const getAllProductsService = async () => {
  try {
    const products = await ProductModel.find({});
    console.log(products);
    return {
      products,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const addProductService = async (input: AddProductService) => {
  try {
    const product = new ProductModel(input);
    const newProduct = await product.save();
    if (!newProduct) throw new Error('error');
    return newProduct;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
