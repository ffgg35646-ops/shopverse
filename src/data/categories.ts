export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    image: "/images/categories/electronics.jpg",
    description: "Latest gadgets, smart devices, and everyday electronics.",
    productCount: 50
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    image: "/images/categories/fashion.jpg",
    description: "Modern clothing for men and women.",
    productCount: 40
  },
  {
    id: 3,
    name: "Shoes",
    slug: "shoes",
    image: "/images/categories/shoes.jpg",
    description: "Comfortable sneakers, boots, and casual footwear.",
    productCount: 30
  },
  {
    id: 4,
    name: "Watches",
    slug: "watches",
    image: "/images/categories/watches.jpg",
    description: "Luxury, smart, and everyday watches.",
    productCount: 20
  },
  {
    id: 5,
    name: "Fragrances",
    slug: "fragrances",
    image: "/images/categories/fragrances.jpg",
    description: "Premium perfumes and long-lasting fragrances.",
    productCount: 20
  },
  {
    id: 6,
    name: "Accessories",
    slug: "accessories",
    image: "/images/categories/accessories.jpg",
    description: "Bags, wallets, sunglasses, and lifestyle accessories.",
    productCount: 20
  }
];
