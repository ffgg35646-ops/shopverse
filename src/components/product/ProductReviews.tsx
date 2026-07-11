import type { Review } from "@/types";

import Rating from "@/components/ui/Rating";
import EmptyState from "@/components/ui/EmptyState";


interface ProductReviewsProps {
  reviews: Review[];
}


const ProductReviews = ({
  reviews
}: ProductReviewsProps) => {

  if (reviews.length === 0) {
    return (
      <EmptyState
        title="No reviews yet"
        description="Be the first customer to review this product."
      />
    );
  }

  return (

    <div className="space-y-6">

      {reviews.map((review) => (

        <article
          key={review.id}
          className="rounded-xl border p-5"
        >

          <div className="mb-4 flex items-start justify-between">

            <div>

              <h3 className="font-semibold">
                {review.userName}
              </h3>

              <p className="text-sm text-gray-500">
                {review.date}
              </p>

            </div>

            <Rating
              value={review.rating}
              size={16}
            />

          </div>

          <h4 className="mb-2 font-medium">
            {review.title}
          </h4>

          <p className="leading-7 text-gray-600">
            {review.comment}
          </p>

        </article>

      ))}

    </div>

  );

};


export default ProductReviews;
