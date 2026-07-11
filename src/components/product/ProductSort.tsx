import type { ChangeEvent } from "react";

export type ProductSortOption =
  | "featured"
  | "newest"
  | "price-low-high"
  | "price-high-low"
  | "rating"
  | "name-a-z"
  | "name-z-a";


interface ProductSortProps {
  value: ProductSortOption;
  onChange: (value: ProductSortOption) => void;
}


const ProductSort = ({
  value,
  onChange
}: ProductSortProps) => {

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {

    onChange(
      event.target.value as ProductSortOption
    );

  };


  return (

    <div className="flex items-center gap-3">

      <label
        htmlFor="product-sort"
        className="text-sm font-medium text-gray-700"
      >
        Sort by
      </label>

      <select
        id="product-sort"
        value={value}
        onChange={handleChange}
        className="
          rounded-lg
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          outline-none
          transition
          focus:border-black
        "
      >

        <option value="featured">
          Featured
        </option>

        <option value="newest">
          Newest
        </option>

        <option value="price-low-high">
          Price: Low to High
        </option>

        <option value="price-high-low">
          Price: High to Low
        </option>

        <option value="rating">
          Highest Rated
        </option>

        <option value="name-a-z">
          Name: A - Z
        </option>

        <option value="name-z-a">
          Name: Z - A
        </option>

      </select>

    </div>

  );

};


export default ProductSort;
