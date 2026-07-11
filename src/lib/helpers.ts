export const formatPrice = (
  price: number,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(price);
};


export const calculateDiscount = (
  originalPrice: number,
  price: number
): number => {
  if (originalPrice <= price) {
    return 0;
  }

  return Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );
};


export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};


export const truncateText = (
  text: string,
  length: number = 100
): string => {
  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
};


export const formatDate = (
  date: string
): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
};


export const capitalize = (
  text: string
): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};


export const getFullImageUrl = (
  image: string
): string => {
  if (image.startsWith("http")) {
    return image;
  }

  return image;
};
