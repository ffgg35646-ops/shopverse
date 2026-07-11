import { useMemo, useState } from "react";

import PageHeader from "@/components/layout/PageHeader";
import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid from "@/components/product/ProductGrid";
import ProductSort, {
  type ProductSortOption
} from "@/components/product/ProductSort";
import Pagination from "@/components/ui/Pagination";

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

import { useCart } from "@/hooks/useCart";

import type { Product } from "@/types";


const PRODUCTS_PER_PAGE = 12;


const Shop = () => {

  const { addToCart } = useCart();

  const [page, setPage] = useState(1);

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [availability, setAvailability] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const [sortBy, setSortBy] =
    useState<ProductSortOption>("featured");


  const filteredProducts = useMemo(() => {

    let filtered = [...products];

    filtered = filtered.filter((product) => {

      const finalPrice =
        product.discountPercentage > 0
          ? product.price -
            (product.price * product.discountPercentage) / 100
          : product.price;

      if (
        category &&
        product.category !== category
      ) {
        return false;
      }

      if (
        brand &&
        product.brand !== brand
      ) {
        return false;
      }

      if (
        availability === "in-stock" &&
        !product.inStock
      ) {
        return false;
      }

      if (
        availability === "out-of-stock" &&
        product.inStock
      ) {
        return false;
      }

      if (
        finalPrice < minPrice ||
        finalPrice > maxPrice
      ) {
        return false;
      }

      return true;

    });


    switch (sortBy) {

      case "featured":
        filtered.sort(
          (a, b) =>
            Number(b.featured) -
            Number(a.featured)
        );
        break;

      case "newest":
        filtered.sort(
          (a, b) =>
            b.id - a.id
        );
        break;

      case "price-low-high":
        filtered.sort(
          (a, b) =>
            a.price - b.price
        );
        break;

      case "price-high-low":
        filtered.sort(
          (a, b) =>
            b.price - a.price
        );
        break;

      case "rating":
        filtered.sort(
          (a, b) =>
            b.rating - a.rating
        );
        break;

      case "name-a-z":
        filtered.sort(
          (a, b) =>
            a.name.localeCompare(b.name)
        );
        break;

      case "name-z-a":
        filtered.sort(
          (a, b) =>
            b.name.localeCompare(a.name)
        );
        break;

    }

    return filtered;

  }, [
    category,
    brand,
    availability,
    minPrice,
    maxPrice,
    sortBy
  ]);


  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredProducts.length /
      PRODUCTS_PER_PAGE
    )
  );


  const paginatedProducts =
    filteredProducts.slice(
      (page - 1) * PRODUCTS_PER_PAGE,
      page * PRODUCTS_PER_PAGE
    );


  const resetFilters = () => {

    setCategory("");
    setBrand("");
    setAvailability("");
    setMinPrice(0);
    setMaxPrice(10000);
    setSortBy("featured");
    setPage(1);

  };


  const handleAddToCart = (
    product: Product
  ) => {

    addToCart(product, 1);

  };


  return (

    <>

      <PageHeader
        title="Shop"
        description="Browse thousands of premium products."
      />

      <section className="container mx-auto px-4 py-12">

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

          <ProductFilters
            categories={categories}
            brands={brands}
            selectedCategory={category}
            selectedBrand={brand}
            selectedAvailability={availability}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onCategoryChange={setCategory}
            onBrandChange={setBrand}
            onAvailabilityChange={setAvailability}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            onReset={resetFilters}
          />

          <div>

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-gray-500">
                {filteredProducts.length} products found
              </p>

              <ProductSort
                value={sortBy}
                onChange={setSortBy}
              />

            </div>

            <ProductGrid
              products={paginatedProducts}
              onAddToCart={handleAddToCart}
            />

            {totalPages > 1 && (

              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />

            )}

          </div>

        </div>

      </section>

    </>

  );

};


export default Shop;
