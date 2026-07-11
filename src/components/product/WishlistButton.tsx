import { Heart } from "lucide-react";

import type { Product } from "@/types";

import { useWishlist } from "@/hooks/useWishlist";


interface WishlistButtonProps {
  product: Product;
  className?: string;
}


const WishlistButton = ({
  product,
  className = ""
}: WishlistButtonProps) => {

  const {
    isInWishlist,
    toggleWishlist
  } = useWishlist();


  const active = isInWishlist(product.id);


  return (

    <button
      type="button"
      onClick={() => toggleWishlist(product)}
      aria-label={
        active
          ? "Remove from wishlist"
          : "Add to wishlist"
      }
      className={`
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:scale-105
        hover:shadow-md

        ${
          active
            ? "border-red-500 text-red-500"
            : "border-gray-200 text-gray-600"
        }

        ${className}
      `}
    >

      <Heart
        size={20}
        className={
          active
            ? "fill-current"
            : ""
        }
      />

    </button>

  );

};


export default WishlistButton;
