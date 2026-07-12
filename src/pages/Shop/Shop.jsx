import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const searchText = search.trim().toLowerCase();

    if (searchText) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText) ||
          product.category.toLowerCase().includes(searchText) ||
          product.brand.toLowerCase().includes(searchText)
      );
    }

    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    switch (sort) {
      case "low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result;
  }, [search, category, sort]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-12 lg:py-16">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">

            <div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Shop
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Showing {filteredProducts.length} of {products.length} Products
              </p>

            </div>

            {/* Sort */}

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full sm:w-64 border border-gray-300 rounded-xl px-5 py-3 bg-white"
            >
              <option value="default">Default</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="rating">Highest Rated</option>
            </select>

          </div>

          {/* Search */}

          <div className="mb-8">

            <input
              type="text"
              placeholder="Search by name, category or brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Categories */}

          <div className="flex flex-wrap gap-3 mb-10">

            {["All", "Men", "Women", "Shoes", "Bags"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-3 rounded-xl font-semibold transition ${
                  category === item
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 hover:bg-blue-50"
                }`}
              >
                {item}
              </button>
            ))}

          </div>          {/* Product Grid */}

          {filteredProducts.length === 0 ? (

            <div className="text-center py-20 sm:py-24">

              <h2 className="text-2xl sm:text-3xl font-bold">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-4 text-sm sm:text-base">
                Try changing your search or category.
              </p>

            </div>

          ) : (

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
                lg:gap-8
              "
            >

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          )}

        </div>

      </section>
  <Footer />
    </>
  );
}

export default Shop;