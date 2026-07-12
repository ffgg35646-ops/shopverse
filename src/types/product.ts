import type { Review } from "./review";

export interface Product {
  id: number;
  sku: string;

  name: string;
  slug: string;
  description: string;

  category: string;
  brand: string;

  price: number;
  originalPrice?: number;
  discount?: number;
  discountPercentage: number;

  currency: string;

  stock: number;
  sold: number;

  rating: number;
  reviewCount: number;

  images: string[];
  thumbnail: string;

  colors: string[];
  sizes: string[];

  tags: string[];

  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
  onSale: boolean;

  inStock: boolean;

  reviews: Review[];

  createdAt: string;
  updatedAt: string;
}
