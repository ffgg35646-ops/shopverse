import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Product } from "@/types";

import { products as productData } from "@/data/products";


interface ProductState {
  items: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}


const initialState: ProductState = {
  items: productData,

  selectedProduct: null,

  loading: false,

  error: null
};


const productSlice = createSlice({

  name: "products",

  initialState,

  reducers: {

    setProducts(
      state,
      action: PayloadAction<Product[]>
    ) {
      state.items = action.payload;
    },


    setSelectedProduct(
      state,
      action: PayloadAction<Product | null>
    ) {
      state.selectedProduct =
        action.payload;
    },


    setLoading(
      state,
      action: PayloadAction<boolean>
    ) {
      state.loading =
        action.payload;
    },


    setError(
      state,
      action: PayloadAction<string | null>
    ) {
      state.error =
        action.payload;
    },


    addProduct(
      state,
      action: PayloadAction<Product>
    ) {
      state.items.push(
        action.payload
      );
    },


    updateProduct(
      state,
      action: PayloadAction<Product>
    ) {

      const index =
        state.items.findIndex(
          (product) =>
            product.id ===
            action.payload.id
        );


      if (index !== -1) {

        state.items[index] =
          action.payload;

      }
    },


    deleteProduct(
      state,
      action: PayloadAction<number>
    ) {

      state.items =
        state.items.filter(
          (product) =>
            product.id !==
            action.payload
        );

    }

  }

});


export const {
  setProducts,
  setSelectedProduct,
  setLoading,
  setError,
  addProduct,
  updateProduct,
  deleteProduct
} = productSlice.actions;


export default productSlice.reducer;
