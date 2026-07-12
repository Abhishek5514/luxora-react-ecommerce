import { Link } from "react-router-dom";
import products from "../../data/products";

function RelatedProducts({ currentProduct }) {
  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-4xl font-bold mb-10">
        You May Also Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">

              <h3 className="font-bold text-lg">
                {product.name}
              </h3>

              <p className="text-blue-600 text-xl font-bold mt-2">
                ₹{product.price}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;