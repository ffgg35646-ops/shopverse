import { Link } from "react-router-dom";

import { categories } from "@/data/categories";

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Shop by Category</h2>
        <p className="mt-2 text-gray-500">
          Browse our most popular categories.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.slug}`}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {category.name}
              </h3>

              {category.description && (
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              )}

              {category.productCount !== undefined && (
                <p className="mt-3 text-sm font-medium text-blue-600">
                  {category.productCount} Products
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
