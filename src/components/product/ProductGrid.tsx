import type { Product } from "@/types";

import ProductCard from "./ProductCard";
import EmptyState from "@/components/ui/EmptyState";


interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}


const ProductGrid = ({
  products,
  onAddToCart
}: ProductGridProps) => {

  if (products.length === 0) {
    return (
      <EmptyState
        title="No products found"
        description="Try changing the search or filter options."
      />
    );
  }

  return (

    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />

      ))}

    </div>

  );

};


export default ProductGrid;
