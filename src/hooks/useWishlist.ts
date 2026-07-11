import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "@/store";

import {
  addToWishlist,
  removeFromWishlist
} from "@/store/wishlistSlice";

import type { Product } from "@/types";


export const useWishlist = () => {
  const dispatch = useDispatch<AppDispatch>();

  const wishlist = useSelector(
    (state: RootState) => state.wishlist
  );


  const addItem = (
    product: Product
  ) => {
    dispatch(
      addToWishlist(product)
    );
  };


  const removeItem = (
    productId: number
  ) => {
    dispatch(
      removeFromWishlist(productId)
    );
  };


  const toggleWishlist = (
    product: Product
  ) => {
    const exists = wishlist.items.some(
      (item) => item.id === product.id
    );

    if (exists) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };


  const isInWishlist = (
    productId: number
  ) => {
    return wishlist.items.some(
      (item) => item.id === productId
    );
  };


  return {
    items: wishlist.items,

    count: wishlist.items.length,

    addItem,
    removeItem,
    toggleWishlist,
    isInWishlist
  };
};
