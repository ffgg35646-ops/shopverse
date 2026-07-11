import { Link } from "react-router-dom";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import CouponBox from "@/components/cart/CouponBox";
import EmptyState from "@/components/ui/EmptyState";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/layout/PageHeader";

import { useCart } from "@/hooks/useCart";


const Cart = () => {

  const {
    items,
    subtotal,
    discount,
    shipping,
    total,
    updateQuantity,
    removeFromCart,
    applyCoupon,
    removeCoupon,
    appliedCoupon
  } = useCart();


  if (items.length === 0) {

    return (

      <>

        <PageHeader
          title="Shopping Cart"
          description="Review your selected products."
        />

        <div className="container mx-auto px-4 py-20">

          <EmptyState
            title="Your cart is empty"
            description="Looks like you haven't added any products yet."
            action={
              <Link to="/shop">
                <Button>
                  Continue Shopping
                </Button>
              </Link>
            }
          />

        </div>

      </>

    );

  }


  return (

    <>

      <PageHeader
        title="Shopping Cart"
        description="Review your selected products before checkout."
      />

      <section className="container mx-auto px-4 py-12">

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          <div className="space-y-6">

            {items.map((item) => (

              <CartItem
                key={item.product.id}
                item={item}
                onQuantityChange={updateQuantity}
                onRemove={removeFromCart}
              />

            ))}

            <CouponBox
              appliedCoupon={appliedCoupon?.code}
              onApplyCoupon={applyCoupon}
              onRemoveCoupon={removeCoupon}
            />

          </div>


          <CartSummary
            subtotal={subtotal}
            discount={discount}
            shipping={shipping}
            total={total}
            itemCount={items.length}
            onCheckout={() => {}}
          />

        </div>

      </section>

    </>

  );

};


export default Cart;
