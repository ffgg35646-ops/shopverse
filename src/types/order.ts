import type { User } from "./user";

export interface OrderItem {
  productId: number;
  name: string;
  thumbnail: string;

  price: number;
  quantity: number;

  color?: string;
  size?: string;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;

  country: string;
  city: string;

  addressLine1: string;
  addressLine2?: string;

  postalCode: string;
}

export interface Order {
  id: number;
  orderNumber: string;

  user: User;
  items: OrderItem[];

  shippingAddress: ShippingAddress;

  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
  total: number;

  paymentMethod: "Credit Card" | "PayPal" | "Cash on Delivery";

  paymentStatus: "Pending" | "Paid" | "Failed";

  status:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled";

  orderStatus:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled";

  createdAt: string;
  updatedAt: string;
}
