import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import userReducer from "./userSlice";
import wishlistReducer from "./wishlistSlice";
import orderReducer from "./orderSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    orders: orderReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});


export type RootState = ReturnType<
  typeof store.getState
>;


export type AppDispatch = typeof store.dispatch;
