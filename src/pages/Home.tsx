import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Brands from "@/components/home/Brands";
import Deals from "@/components/home/Deals";
import Newsletter from "@/components/home/Newsletter";

import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { products } from "@/data/products";

import { useCart } from "@/hooks/useCart";

import type { Product } from "@/types";


const Home = () => {

  const { addToCart } = useCart();


  const handleAddToCart = (
    product: Product
  ) => {

    addToCart(product, 1);

  };


  return (

    <>

      <Hero />

      <Categories
        categories={categories}
      />

      <FeaturedProducts
        products={products}
        onAddToCart={handleAddToCart}
      />

      <Brands
        brands={brands}
      />

      <Deals
        products={products}
        onAddToCart={handleAddToCart}
      />

      <Newsletter />

    </>

  );

};


export default Home;
