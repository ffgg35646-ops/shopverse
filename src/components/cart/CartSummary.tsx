import Button from "@/components/ui/Button";


interface CartSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  itemCount: number;
  onCheckout: () => void;
}


const CartSummary = ({
  subtotal,
  discount,
  shipping,
  total,
  itemCount,
  onCheckout
}: CartSummaryProps) => {

  const shippingLabel =
    shipping === 0
      ? "Free"
      : `$${shipping.toFixed(2)}`;

  return (

    <aside className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">
        Order Summary
      </h2>


      <div className="space-y-4">

        <div className="flex items-center justify-between">

          <span className="text-gray-600">
            Items
          </span>

          <span className="font-medium">
            {itemCount}
          </span>

        </div>


        <div className="flex items-center justify-between">

          <span className="text-gray-600">
            Subtotal
          </span>

          <span className="font-medium">
            ${subtotal.toFixed(2)}
          </span>

        </div>


        <div className="flex items-center justify-between">

          <span className="text-gray-600">
            Discount
          </span>

          <span className="font-medium text-green-600">
            -${discount.toFixed(2)}
          </span>

        </div>


        <div className="flex items-center justify-between">

          <span className="text-gray-600">
            Shipping
          </span>

          <span className="font-medium">
            {shippingLabel}
          </span>

        </div>


        <div className="border-t pt-4">

          <div className="flex items-center justify-between">

            <span className="text-lg font-semibold">
              Total
            </span>

            <span className="text-2xl font-bold">
              ${total.toFixed(2)}
            </span>

          </div>

        </div>

      </div>


      <Button
        fullWidth
        size="lg"
        className="mt-8"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>


      <p className="mt-4 text-center text-sm text-gray-500">
        Taxes are calculated during checkout.
      </p>

    </aside>

  );

};


export default CartSummary;
