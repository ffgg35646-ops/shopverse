import { useState } from "react";

import type { Product } from "@/types";


interface ProductGalleryProps {
  product: Product;
}


const ProductGallery = ({
  product
}: ProductGalleryProps) => {

  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  return (

    <div className="space-y-4">

      <div className="overflow-hidden rounded-2xl border bg-white">

        <img
          src={selectedImage}
          alt={product.name}
          className="h-[520px] w-full object-cover"
        />

      </div>


      {product.images.length > 1 && (

        <div className="grid grid-cols-5 gap-3">

          {product.images.map((image, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`
                overflow-hidden
                rounded-lg
                border
                transition

                ${
                  selectedImage === image
                    ? "border-black ring-2 ring-black"
                    : "border-gray-200 hover:border-gray-400"
                }
              `}
            >

              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="h-24 w-full object-cover"
              />

            </button>

          ))}

        </div>

      )}

    </div>

  );

};


export default ProductGallery;
