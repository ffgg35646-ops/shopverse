import { Link } from "react-router-dom";

import type { Brand } from "@/types";


interface BrandsProps {
  brands: Brand[];
}


const Brands = ({
  brands
}: BrandsProps) => {

  return (

    <section className="bg-gray-50 py-20">

      <div className="container mx-auto px-4">

        <div className="mb-10 text-center">

          <h2 className="text-3xl font-bold">
            Shop by Brand
          </h2>

          <p className="mt-2 text-gray-500">
            Explore products from the world's most trusted brands.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

          {brands.map((brand) => (

            <Link
              key={brand.id}
              to={`/shop?brand=${brand.slug}`}
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <img
                src={brand.logo}
                alt={brand.name}
                className="mb-4 h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-center text-lg font-semibold">
                {brand.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {brand.productCount} Products
              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>

  );

};


export default Brands;
