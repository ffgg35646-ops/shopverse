export interface Slider {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  badge?: string;
}

export const sliders: Slider[] = [
  {
    id: 1,
    badge: "New Collection",
    title: "Discover Premium Electronics",
    subtitle: "Smart Devices for Everyday Life",
    description:
      "Explore the latest smartphones, headphones, laptops, and accessories from the world's leading brands.",
    image: "/images/sliders/electronics-banner.jpg",
    buttonText: "Shop Electronics",
    buttonLink: "/shop?category=electronics"
  },
  {
    id: 2,
    badge: "Up to 40% Off",
    title: "Fashion That Matches Your Style",
    subtitle: "Fresh Looks for Every Season",
    description:
      "Discover modern clothing, footwear, and accessories designed for comfort, confidence, and everyday wear.",
    image: "/images/sliders/fashion-banner.jpg",
    buttonText: "Explore Fashion",
    buttonLink: "/shop?category=fashion"
  },
  {
    id: 3,
    badge: "Limited Time",
    title: "Exclusive Deals on Top Brands",
    subtitle: "Save More Every Day",
    description:
      "Don't miss special offers on Apple, Samsung, Nike, Sony, Adidas, Logitech, and many more premium brands.",
    image: "/images/sliders/deals-banner.jpg",
    buttonText: "View Deals",
    buttonLink: "/shop"
  }
];
