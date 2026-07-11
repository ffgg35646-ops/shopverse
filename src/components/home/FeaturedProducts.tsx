import { Link } from "react-router-dom";

import type { Product } from "@/types";

import ProductGrid from "@/components/product/ProductGrid";
import Button from "@/components/ui/Button";


interface FeaturedProductsProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}


const FeaturedProducts = ({
  products,
  onAddToCart
}: FeaturedProductsProps) => {

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 8);


  return (

    <section className="py-20">

      <div className="container mx-auto px-4">

        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <div>

            <h2 className="text-3xl font-bold">
              Featured Products
            </h2>

            <p className="mt-2 text-gray-500">
              Discover our hand-picked collection of best-selling products.
            </p>

          </div>

          <Link to="/shop">

            <Button variant="outline">
              View All Products
            </Button>

          </Link>

        </div>


        <ProductGrid
          products={featuredProducts}
          onAddToCart={onAddToCart}
        />

      </div>

    </section>

  );

};


export default FeaturedProducts;
