import type { Product } from "./product";

export interface CartItem {
  product: Product;

  quantity: number;

  selectedColor?: string;
  selectedSize?: string;
}

export interface Cart {
  items: CartItem[];

  totalItems: number;

  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}
