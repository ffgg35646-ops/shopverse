import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import EmptyState from "@/components/ui/EmptyState";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import { useAppSelector } from "@/store";

import type { RootState } from "@/store";
import type { Order } from "@/types";


const Orders = () => {

  const { orders } = useAppSelector(
    (state: RootState) => state.order
  );


  return (

    <>

      <PageHeader
        title="My Orders"
        description="Track and manage all your orders."
      />

      <section className="container mx-auto px-4 py-12">

        {orders.length === 0 ? (

          <EmptyState
            title="No orders found"
            description="You haven't placed any orders yet."
            action={
              <Link to="/shop">
                <Button>
                  Start Shopping
                </Button>
              </Link>
            }
          />

        ) : (

          <div className="space-y-6">

            {orders.map((order: Order) => (

              <div
                key={order.id}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>

                    <h2 className="text-lg font-semibold">
                      Order #{order.orderNumber}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {order.createdAt}
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


                <div className="mt-6 grid gap-4 border-t pt-6 sm:grid-cols-3">

                  <div>

                    <p className="text-sm text-gray-500">
                      Items
                    </p>

                    <p className="font-semibold">
                      {order.items.length}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Payment
                    </p>

                    <p className="font-semibold">
                      {order.paymentMethod}
                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      Total
                    </p>

                    <p className="text-xl font-bold">
                      ${order.total.toFixed(2)}
                    </p>

                  </div>

                </div>


                <div className="mt-6">

                  <Link
                    to={`/orders/${order.id}`}
                  >
                    <Button variant="outline">
                      View Details
                    </Button>
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </>

  );

};


export default Orders;
