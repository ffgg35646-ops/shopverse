import { Navigate, useParams } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Badge from "@/components/ui/Badge";
import EmptyState from "@/components/ui/EmptyState";

import { useAppSelector } from "@/store";


const TrackOrder = () => {

  const { id } = useParams();

  const { orders } = useAppSelector(
    (state) => state.order
  );

  const order = orders.find(
    (item) => String(item.id) === id
  );


  if (!order) {
    return <Navigate to="/orders" replace />;
  }


  const steps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered"
  ];

  const currentStep = steps.findIndex(
    (step) => step === order.status
  );


  return (

    <>

      <PageHeader
        title="Track Order"
        description={`Order #${order.orderNumber}`}
      />

      <section className="container mx-auto max-w-5xl px-4 py-12">

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Order #{order.orderNumber}
              </h2>

              <p className="mt-2 text-gray-500">
                Placed on {order.createdAt}
              </p>

            </div>

            <Badge
              variant={
                order.status === "Delivered"
                  ? "success"
                  : order.status === "Cancelled"
                  ? "danger"
                  : "warning"
              }
            >
              {order.status}
            </Badge>

          </div>


          {order.status === "Cancelled" ? (

            <EmptyState
              title="This order has been cancelled"
              description="The order is no longer being processed."
            />

          ) : (

            <div className="space-y-8">

              <div className="grid gap-6 md:grid-cols-5">

                {steps.map((step, index) => (

                  <div
                    key={step}
                    className="flex flex-col items-center text-center"
                  >

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${
                        index <= currentStep
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <p className="mt-3 text-sm font-medium">
                      {step}
                    </p>

                  </div>

                ))}

              </div>


              <div className="rounded-lg bg-gray-50 p-6">

                <h3 className="mb-4 text-lg font-semibold">
                  Order Summary
                </h3>

                <div className="space-y-3">

                  {order.items.map((item) => (

                    <div
                      key={item.product.id}
                      className="flex items-center justify-between"
                    >

                      <span>
                        {item.product.name} × {item.quantity}
                      </span>

                      <span className="font-medium">
                        $
                        {(
                          item.product.price *
                          item.quantity
                        ).toFixed(2)}
                      </span>

                    </div>

                  ))}

                </div>

                <div className="mt-6 border-t pt-4">

                  <div className="flex items-center justify-between text-lg font-bold">

                    <span>Total</span>

                    <span>
                      ${order.total.toFixed(2)}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

    </>

  );

};


export default TrackOrder;
