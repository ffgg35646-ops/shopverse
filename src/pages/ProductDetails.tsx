import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import Breadcrumb from "@/components/layout/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";

import { products } from "@/data/products";
import { reviews } from "@/data/reviews";

import { useCart } from "@/hooks/useCart";

import type {
  Product,
  Review
} from "@/types";


const ProductDetails = () => {

  const { slug } = useParams();

  const { addToCart } = useCart();


  const product = useMemo<Product | undefined>(() => {

    return products.find(
      (item) => item.slug === slug
    );

  }, [slug]);


  if (!product) {
    return <Navigate to="/404" replace />;
  }


  const productReviews = reviews.filter(
    (review: Review) =>
      review.productId === product.id
  );


  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );


  const handleAddToCart = (
    selectedProduct: Product,
    quantity: number
  ) => {

    addToCart(selectedProduct, quantity);

  };


  return (

    <>

      <Breadcrumb />

      <section className="container mx-auto px-4 py-10">

        <div className="grid gap-12 lg:grid-cols-2">

          <ProductGallery
            product={product}
          />

          <ProductInfo
            product={product}
            reviews={productReviews}
            onAddToCart={handleAddToCart}
          />

        </div>


        <ProductTabs
          product={product}
          reviews={productReviews}
        />


        <RelatedProducts
          currentProductId={product.id}
          products={relatedProducts}
          onAddToCart={(item) =>
            addToCart(item, 1)
          }
        />

      </section>

    </>

  );

};


export default ProductDetails;
