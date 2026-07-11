import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Cart, CartItem } from "@/types";


const initialState: Cart = {
  items: [],

  totalItems: 0,

  subtotal: 0,
  discount: 0,
  shipping: 0,
  tax: 0,
  total: 0
};


const calculateTotals = (
  items: CartItem[]
) => {

  const totalItems = items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  const subtotal = items.reduce(
    (total, item) =>
      total +
      item.product.price *
      item.quantity,
    0
  );


  const tax = subtotal * 0.05;


  const shipping =
    subtotal > 100 ? 0 : 10;


  const total =
    subtotal +
    tax +
    shipping;


  return {
    totalItems,
    subtotal,
    tax,
    shipping,
    total
  };
};


const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    addToCart(
      state,
      action: PayloadAction<CartItem>
    ) {

      const existingItem =
        state.items.find(
          (item) =>
            item.product.id ===
            action.payload.product.id
        );


      if (existingItem) {

        existingItem.quantity +=
          action.payload.quantity;

      } else {

        state.items.push(
          action.payload
        );

      }


      Object.assign(
        state,
        calculateTotals(state.items)
      );
    },


    removeFromCart(
      state,
      action: PayloadAction<number>
    ) {

      state.items =
        state.items.filter(
          (item) =>
            item.product.id !==
            action.payload
        );


      Object.assign(
        state,
        calculateTotals(state.items)
      );
    },


    updateQuantity(
      state,
      action: PayloadAction<{
        productId: number;
        quantity: number;
      }>
    ) {

      const item =
        state.items.find(
          (item) =>
            item.product.id ===
            action.payload.productId
        );


      if (item) {

        item.quantity =
          action.payload.quantity;

      }


      Object.assign(
        state,
        calculateTotals(state.items)
      );
    },


    clearCart(state) {

      state.items = [];

      Object.assign(
        state,
        initialState
      );

    }

  }

});


export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart
} = cartSlice.actions;


export default cartSlice.reducer;
