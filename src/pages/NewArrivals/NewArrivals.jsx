import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

function NewArrivals() {
  const [search, setSearch] = useState("");

  const newProducts = useMemo(() => {
    return products.filter((product) => {
      const isNew =
        product.badge.toLowerCase() === "new";

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.brand
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(search.toLowerCase());

      return isNew && matchesSearch;
    });
  }, [search]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <h1 className="text-4xl lg:text-5xl font-bold">
            New Arrivals
          </h1>

          <p className="text-gray-500 mt-3">
            Explore our latest fashion collection.
          </p>

          <div className="mt-10">

            <input
              type="text"
              placeholder="Search new arrivals..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>
                    <div className="mt-12">

            {newProducts.length === 0 ? (

              <div className="text-center py-20">

                <h2 className="text-3xl font-bold">
                  No New Products Found
                </h2>

                <p className="text-gray-500 mt-4">
                  Try searching with a different keyword.
                </p>

              </div>

            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                {newProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default NewArrivals;