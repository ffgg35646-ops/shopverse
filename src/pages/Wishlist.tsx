import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import ProductGrid from "@/components/product/ProductGrid";
import EmptyState from "@/components/ui/EmptyState";
import Button from "@/components/ui/Button";

import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";

import type { Product } from "@/types";


const Wishlist = () => {

  const { wishlist } = useWishlist();
  const { addToCart } = useCart();


  const handleAddToCart = (
    product: Product
  ) => {

    addToCart(product, 1);

  };


  return (

    <>

      <PageHeader
        title="Wishlist"
        description="Products you've saved for later."
      />

      <section className="container mx-auto px-4 py-12">

        {wishlist.length === 0 ? (

          <EmptyState
            title="Your wishlist is empty"
            description="Save products you like and they'll appear here."
            action={
              <Link to="/shop">
                <Button>
                  Continue Shopping
                </Button>
              </Link>
            }
          />

        ) : (

          <ProductGrid
            products={wishlist}
            onAddToCart={handleAddToCart}
          />

        )}

      </section>

    </>

  );

};


export default Wishlist;
