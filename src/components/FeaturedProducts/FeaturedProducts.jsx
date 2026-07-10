import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Trending Products
        </h2>

        <div className="grid grid-cols-4 gap-8">
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