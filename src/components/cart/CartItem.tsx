import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

import type { CartItem as CartItemType } from "@/types";

import QuantitySelector from "@/components/ui/QuantitySelector";
import Button from "@/components/ui/Button";


interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (
    productId: number,
    quantity: number
  ) => void;
  onRemove: (productId: number) => void;
}


const CartItem = ({
  item,
  onQuantityChange,
  onRemove
}: CartItemProps) => {

  const {
    product,
    quantity
  } = item;

  const hasDiscount =
    product.discountPercentage > 0;

  const unitPrice = hasDiscount
    ? product.price -
      (product.price * product.discountPercentage) / 100
    : product.price;

  const totalPrice =
    unitPrice * quantity;

  return (

    <article className="flex flex-col gap-6 rounded-xl border bg-white p-5 md:flex-row">

      <Link
        to={`/product/${product.slug}`}
        className="shrink-0"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-32 w-32 rounded-lg object-cover"
        />
      </Link>


      <div className="flex flex-1 flex-col justify-between gap-5">

        <div>

          <p className="text-sm text-gray-500">
            {product.brand}
          </p>

          <Link
            to={`/product/${product.slug}`}
            className="mt-1 block text-lg font-semibold hover:text-blue-600"
          >
            {product.name}
          </Link>

          <p className="mt-3 text-sm text-gray-500">
            SKU: {product.sku}
          </p>

        </div>


        <div className="flex flex-wrap items-center gap-6">

          <QuantitySelector
            value={quantity}
            max={product.stock}
            onChange={(value) =>
              onQuantityChange(
                product.id,
                value
              )
            }
          />

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              onRemove(product.id)
            }
          >
            <div className="flex items-center gap-2">
              <Trash2 size={18} />
              Remove
            </div>
          </Button>

        </div>

      </div>


      <div className="flex min-w-[140px] flex-col items-end justify-between">

        <div className="text-right">

          <p className="text-sm text-gray-500">
            Unit Price
          </p>

          <p className="text-xl font-bold">
            ${unitPrice.toFixed(2)}
          </p>

        </div>

        <div className="text-right">

          <p className="text-sm text-gray-500">
            Total
          </p>

          <p className="text-2xl font-bold">
            ${totalPrice.toFixed(2)}
          </p>

        </div>

      </div>

    </article>

  );

};


export default CartItem;
