export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  description: string;
  productCount: number;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Apple",
    slug: "apple",
    logo: "/images/brands/apple.svg",
    description: "Premium smartphones, tablets, laptops, and accessories.",
    productCount: 12
  },
  {
    id: 2,
    name: "Samsung",
    slug: "samsung",
    logo: "/images/brands/samsung.svg",
    description: "Innovative electronics and smart devices.",
    productCount: 15
  },
  {
    id: 3,
    name: "Sony",
    slug: "sony",
    logo: "/images/brands/sony.svg",
    description: "Audio equipment, gaming, and consumer electronics.",
    productCount: 10
  },
  {
    id: 4,
    name: "Nike",
    slug: "nike",
    logo: "/images/brands/nike.svg",
    description: "Sportswear, footwear, and lifestyle apparel.",
    productCount: 18
  },
  {
    id: 5,
    name: "Adidas",
    slug: "adidas",
    logo: "/images/brands/adidas.svg",
    description: "Performance sportswear and athletic footwear.",
    productCount: 16
  },
  {
    id: 6,
    name: "Levi's",
    slug: "levis",
    logo: "/images/brands/levis.svg",
    description: "Classic denim and casual fashion.",
    productCount: 8
  },
  {
    id: 7,
    name: "Casio",
    slug: "casio",
    logo: "/images/brands/casio.svg",
    description: "Reliable watches and electronic products.",
    productCount: 9
  },
  {
    id: 8,
    name: "Seiko",
    slug: "seiko",
    logo: "/images/brands/seiko.svg",
    description: "Japanese precision watches with timeless design.",
    productCount: 7
  },
  {
    id: 9,
    name: "JBL",
    slug: "jbl",
    logo: "/images/brands/jbl.svg",
    description: "Portable speakers and premium audio products.",
    productCount: 11
  },
  {
    id: 10,
    name: "Anker",
    slug: "anker",
    logo: "/images/brands/anker.svg",
    description: "Charging solutions and mobile accessories.",
    productCount: 14
  },
  {
    id: 11,
    name: "Logitech",
    slug: "logitech",
    logo: "/images/brands/logitech.svg",
    description: "Computer peripherals and productivity devices.",
    productCount: 13
  },
  {
    id: 12,
    name: "Ray-Ban",
    slug: "ray-ban",
    logo: "/images/brands/ray-ban.svg",
    description: "Premium sunglasses and eyewear.",
    productCount: 6
  }
];
