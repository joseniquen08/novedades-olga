export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export type CategoryType = {
  name: string;
  tag: string;
  status: string;
}

export type GetAllCategoriesDataType = {
  getAllCategories: {
    categories: CategoryType[];
  }
}

export type GetProductsByTagDataType = {
  getProductsByTag: {
    products: ProductType[];
  }
}
