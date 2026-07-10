import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Shop() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8">

          {/* Heading */}
          <h1 className="text-5xl font-bold text-center mb-10">
            Shop
          </h1>

          {/* Search Box */}
          <div className="mb-10">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-2xl font-semibold text-gray-500">
                No products found.
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}

export default Shop;