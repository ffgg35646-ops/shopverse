import { useNavigate } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import CheckoutForm, {
  type CheckoutFormData
} from "@/components/cart/CheckoutForm";
import PaymentForm, {
  type PaymentFormData
} from "@/components/cart/PaymentForm";
import CartSummary from "@/components/cart/CartSummary";

import { useCart } from "@/hooks/useCart";


const Checkout = () => {

  const navigate = useNavigate();

  const {
    subtotal,
    discount,
    shipping,
    total,
    items,
    clearCart
  } = useCart();


  const handleCheckout = (
    billing: CheckoutFormData,
    payment: PaymentFormData
  ) => {

    console.log("Billing Information:", billing);
    console.log("Payment Information:", payment);

    clearCart();

    navigate("/order-success");

  };


  let billingData: CheckoutFormData | null = null;


  return (

    <>

      <PageHeader
        title="Checkout"
        description="Complete your order securely."
      />

      <section className="container mx-auto px-4 py-12">

        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          <div className="space-y-8">

            <CheckoutForm
              onSubmit={(data) => {
                billingData = data;
              }}
            />

            <PaymentForm
              onSubmit={(paymentData) => {

                if (!billingData) {
                  return;
                }

                handleCheckout(
                  billingData,
                  paymentData
                );

              }}
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


export default Checkout;
