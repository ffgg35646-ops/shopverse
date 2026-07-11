import type { Product } from "@/types";

import ProductCard from "./ProductCard";


interface RelatedProductsProps {
  currentProductId: number;
  products: Product[];
  onAddToCart?: (product: Product) => void;
}


const RelatedProducts = ({
  currentProductId,
  products,
  onAddToCart
}: RelatedProductsProps) => {

  const relatedProducts = products
    .filter(
      (product) => product.id !== currentProductId
    )
    .slice(0, 4);


  if (relatedProducts.length === 0) {
    return null;
  }


  return (

    <section className="mt-16">

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          Related Products
        </h2>

        <p className="mt-2 text-gray-500">
          You may also like these products.
        </p>

      </div>


      <div
        className="
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {relatedProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />

        ))}

      </div>

    </section>

  );

};


export default RelatedProducts;
