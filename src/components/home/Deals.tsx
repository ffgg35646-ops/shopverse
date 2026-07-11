import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Product } from "@/types";

import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";


interface DealsProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}


const Deals = ({
  products,
  onAddToCart
}: DealsProps) => {

  const dealProducts = products
    .filter((product) => product.discountPercentage > 0)
    .sort(
      (a, b) =>
        b.discountPercentage - a.discountPercentage
    )
    .slice(0, 4);


  if (dealProducts.length === 0) {
    return null;
  }


  return (

    <section className="bg-red-50 py-20">

      <div className="container mx-auto px-4">

        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">

              <Clock size={16} />

              Limited Time Offers

            </div>

            <h2 className="text-3xl font-bold">
              Today's Best Deals
            </h2>

            <p className="mt-2 text-gray-600">
              Save more with our biggest discounts on selected products.
            </p>

          </div>


          <Link to="/shop">

            <Button variant="outline">

              <div className="flex items-center gap-2">

                View All Deals

                <ArrowRight size={18} />

              </div>

            </Button>

          </Link>

        </div>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {dealProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />

          ))}

        </div>

      </div>

    </section>

  );

};


export default Deals;
