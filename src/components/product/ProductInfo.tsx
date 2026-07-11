import { Truck, ShieldCheck, RotateCcw } from "lucide-react";

import type { Product, Review } from "@/types";

import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import QuantitySelector from "@/components/ui/QuantitySelector";
import WishlistButton from "./WishlistButton";

import { useState } from "react";


interface ProductInfoProps {
  product: Product;
  reviews: Review[];
  onAddToCart?: (product: Product, quantity: number) => void;
}


const ProductInfo = ({
  product,
  reviews,
  onAddToCart
}: ProductInfoProps) => {

  const [quantity, setQuantity] = useState(1);

  const hasDiscount =
    product.discountPercentage > 0;

  const finalPrice = hasDiscount
    ? product.price -
      (product.price * product.discountPercentage) / 100
    : product.price;


  return (

    <div className="space-y-6">

      <div>

        <p className="mb-2 text-sm text-gray-500">
          {product.brand}
        </p>

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

      </div>


      <div className="flex items-center gap-4">

        <Rating
          value={product.rating}
          count={product.reviewCount}
        />

        {product.inStock ? (
          <Badge variant="success">
            In Stock
          </Badge>
        ) : (
          <Badge variant="danger">
            Out of Stock
          </Badge>
        )}

      </div>


      <div className="flex items-center gap-3">

        <span className="text-4xl font-bold">
          ${finalPrice.toFixed(2)}
        </span>

        {hasDiscount && (
          <>
            <span className="text-xl text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </span>

            <Badge variant="danger">
              Save {product.discountPercentage}%
            </Badge>
          </>
        )}

      </div>


      <p className="leading-7 text-gray-600">
        {product.description}
      </p>


      <div>

        <h3 className="mb-2 font-semibold">
          Quantity
        </h3>

        <QuantitySelector
          value={quantity}
          max={product.stock}
          onChange={setQuantity}
        />

      </div>


      <div className="flex gap-4">

        <Button
          fullWidth
          disabled={!product.inStock}
          onClick={() =>
            onAddToCart?.(
              product,
              quantity
            )
          }
        >
          Add to Cart
        </Button>

        <WishlistButton
          product={product}
        />

      </div>


      <div className="space-y-4 rounded-xl border p-5">

        <div className="flex items-center gap-3">
          <Truck size={20} />
          <span>
            Free shipping on orders over $100
          </span>
        </div>


        <div className="flex items-center gap-3">
          <ShieldCheck size={20} />
          <span>
            Secure payment and buyer protection
          </span>
        </div>


        <div className="flex items-center gap-3">
          <RotateCcw size={20} />
          <span>
            30-day return policy
          </span>
        </div>

      </div>

    </div>

  );

};


export default ProductInfo;
