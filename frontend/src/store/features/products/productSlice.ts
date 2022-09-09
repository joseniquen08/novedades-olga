import { ProductType } from "@custom-types/admin/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  products: ProductType[];
  startRefetch: boolean;
}

const initialState: ProductState = {
  products: [],
  startRefetch: false,
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setRefetchAddProduct: (state, action: PayloadAction<boolean>) => {
      state.startRefetch = action.payload;
    }
  }
});

export const { setRefetchAddProduct } = productSlice.actions;

export default productSlice.reducer;
