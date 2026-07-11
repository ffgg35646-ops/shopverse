import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import type { Product } from "@/types";

import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import WishlistButton from "./WishlistButton";


interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}


const ProductCard = ({
  product,
  onAddToCart
}: ProductCardProps) => {

  const hasDiscount =
    product.discountPercentage > 0;

  const finalPrice = hasDiscount
    ? product.price -
      (product.price * product.discountPercentage) / 100
    : product.price;

  return (

    <article
      className="
        group
        overflow-hidden
        rounded-xl
        border
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <div className="relative overflow-hidden">

        <Link to={`/product/${product.slug}`}>

          <img
            src={product.images[0]}
            alt={product.name}
            className="
              h-64
              w-full
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />

        </Link>


        {hasDiscount && (
          <div className="absolute left-3 top-3">
            <Badge variant="danger">
              -{product.discountPercentage}%
            </Badge>
          </div>
        )}


        {!product.inStock && (
          <div className="absolute right-3 top-3">
            <Badge variant="warning">
              Out of Stock
            </Badge>
          </div>
        )}


        <div className="absolute right-3 bottom-3">
          <WishlistButton product={product} />
        </div>

      </div>


      <div className="space-y-3 p-5">

        <p className="text-sm text-gray-500">
          {product.brand}
        </p>


        <Link
          to={`/product/${product.slug}`}
          className="block"
        >

          <h3
            className="
              line-clamp-2
              text-lg
              font-semibold
              transition-colors
              hover:text-blue-600
            "
          >
            {product.name}
          </h3>

        </Link>


        <Rating
          value={product.rating}
          count={product.reviewCount}
        />


        <div className="flex items-center gap-2">

          <span className="text-2xl font-bold">
            ${finalPrice.toFixed(2)}
          </span>

          {hasDiscount && (
            <span className="text-gray-400 line-through">
              ${product.price.toFixed(2)}
            </span>
          )}

        </div>


        <Button
          fullWidth
          disabled={!product.inStock}
          onClick={() => onAddToCart?.(product)}
        >

          <div className="flex items-center justify-center gap-2">

            <ShoppingCart size={18} />

            {product.inStock
              ? "Add to Cart"
              : "Out of Stock"}

          </div>

        </Button>

      </div>

    </article>

  );

};


export default ProductCard;
