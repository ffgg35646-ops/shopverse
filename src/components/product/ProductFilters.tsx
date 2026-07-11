import { useMemo } from "react";

import type {
  Brand,
  Category
} from "@/types";


interface ProductFiltersProps {
  categories: Category[];
  brands: Brand[];

  selectedCategory: string;
  selectedBrand: string;
  selectedAvailability: string;
  minPrice: number;
  maxPrice: number;

  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
  onAvailabilityChange: (value: string) => void;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  onReset: () => void;
}


const ProductFilters = ({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  selectedAvailability,
  minPrice,
  maxPrice,
  onCategoryChange,
  onBrandChange,
  onAvailabilityChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset
}: ProductFiltersProps) => {

  const hasFilters = useMemo(() => {

    return (
      selectedCategory !== "" ||
      selectedBrand !== "" ||
      selectedAvailability !== "" ||
      minPrice > 0 ||
      maxPrice < 10000
    );

  }, [
    selectedCategory,
    selectedBrand,
    selectedAvailability,
    minPrice,
    maxPrice
  ]);


  return (

    <aside className="rounded-xl border bg-white p-6">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-lg font-semibold">
          Filters
        </h2>

        <button
          type="button"
          onClick={onReset}
          disabled={!hasFilters}
          className="text-sm text-blue-600 disabled:text-gray-400"
        >
          Reset
        </button>

      </div>


      <div className="space-y-6">

        <div>

          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            value={selectedCategory}
            onChange={(e) =>
              onCategoryChange(e.target.value)
            }
            className="w-full rounded-lg border p-2.5"
          >
            <option value="">
              All Categories
            </option>

            {categories.map((category) => (

              <option
                key={category.id}
                value={category.slug}
              >
                {category.name}
              </option>

            ))}

          </select>

        </div>


        <div>

          <label className="mb-2 block text-sm font-medium">
            Brand
          </label>

          <select
            value={selectedBrand}
            onChange={(e) =>
              onBrandChange(e.target.value)
            }
            className="w-full rounded-lg border p-2.5"
          >
            <option value="">
              All Brands
            </option>

            {brands.map((brand) => (

              <option
                key={brand.id}
                value={brand.slug}
              >
                {brand.name}
              </option>

            ))}

          </select>

        </div>


        <div>

          <label className="mb-2 block text-sm font-medium">
            Availability
          </label>

          <select
            value={selectedAvailability}
            onChange={(e) =>
              onAvailabilityChange(e.target.value)
            }
            className="w-full rounded-lg border p-2.5"
          >
            <option value="">
              All
            </option>

            <option value="in-stock">
              In Stock
            </option>

            <option value="out-of-stock">
              Out of Stock
            </option>

          </select>

        </div>


        <div>

          <label className="mb-2 block text-sm font-medium">
            Price Range
          </label>

          <div className="grid grid-cols-2 gap-3">

            <input
              type="number"
              min={0}
              value={minPrice}
              onChange={(e) =>
                onMinPriceChange(Number(e.target.value))
              }
              className="rounded-lg border p-2.5"
              placeholder="Min"
            />

            <input
              type="number"
              min={0}
              value={maxPrice}
              onChange={(e) =>
                onMaxPriceChange(Number(e.target.value))
              }
              className="rounded-lg border p-2.5"
              placeholder="Max"
            />

          </div>

        </div>

      </div>

    </aside>

  );

};


export default ProductFilters;
