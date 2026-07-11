import { useSelector } from "react-redux";

import type { RootState } from "@/store";

import type { Product } from "@/types";


interface ProductFilters {
  category?: string;
  brand?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
}


export const useProducts = () => {
  const products = useSelector(
    (state: RootState) => state.products.items
  );


  const getProductById = (
    id: number
  ): Product | undefined => {
    return products.find(
      (product) => product.id === id
    );
  };


  const getProductBySlug = (
    slug: string
  ): Product | undefined => {
    return products.find(
      (product) => product.slug === slug
    );
  };


  const filterProducts = (
    filters: ProductFilters
  ): Product[] => {
    return products.filter((product) => {

      const matchesCategory =
        !filters.category ||
        product.category === filters.category;


      const matchesBrand =
        !filters.brand ||
        product.brand === filters.brand;


      const matchesSearch =
        !filters.search ||
        product.name
          .toLowerCase()
          .includes(
            filters.search.toLowerCase()
          );


      const matchesMinPrice =
        !filters.minPrice ||
        product.price >= filters.minPrice;


      const matchesMaxPrice =
        !filters.maxPrice ||
        product.price <= filters.maxPrice;


      return (
        matchesCategory &&
        matchesBrand &&
        matchesSearch &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  };


  const getFeaturedProducts = (): Product[] => {
    return products.filter(
      (product) => product.featured
    );
  };


  const getBestSellers = (): Product[] => {
    return products.filter(
      (product) => product.bestSeller
    );
  };


  const getNewArrivals = (): Product[] => {
    return products.filter(
      (product) => product.newArrival
    );
  };


  return {
    products,

    getProductById,
    getProductBySlug,

    filterProducts,

    getFeaturedProducts,
    getBestSellers,
    getNewArrivals
  };
};
