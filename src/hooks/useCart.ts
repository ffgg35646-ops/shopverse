import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "@/store";

import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart
} from "@/store/cartSlice";

import type { Product } from "@/types";


export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cart = useSelector(
    (state: RootState) => state.cart
  );


  const addItem = (
    product: Product,
    quantity: number = 1,
    color?: string,
    size?: string
  ) => {
    dispatch(
      addToCart({
        product,
        quantity,
        selectedColor: color,
        selectedSize: size
      })
    );
  };


  const removeItem = (
    productId: number
  ) => {
    dispatch(
      removeFromCart(productId)
    );
  };


  const updateItemQuantity = (
    productId: number,
    quantity: number
  ) => {
    dispatch(
      updateQuantity({
        productId,
        quantity
      })
    );
  };


  const clear = () => {
    dispatch(clearCart());
  };


  return {
    cart,

    items: cart.items,
    totalItems: cart.totalItems,
    subtotal: cart.subtotal,
    total: cart.total,

    addItem,
    removeItem,
    updateItemQuantity,
    clear
  };
};
