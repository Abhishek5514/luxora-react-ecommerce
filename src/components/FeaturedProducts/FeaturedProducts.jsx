import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Trending Products
        </h2>

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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;