import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer/Footer";
import toast from "react-hot-toast";
import {
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center text-2xl sm:text-3xl font-bold">
          Product Not Found
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    toast.success(`${quantity} item(s) added to cart`);
  };

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Product Image */}

          <div className="flex justify-center">

            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md lg:max-w-full rounded-3xl shadow-2xl"
            />

          </div>

          {/* Product Info */}

          <div>

            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
              {product.badge}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-2 mt-5 text-yellow-500">

              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}

              <span className="text-gray-600 ml-2 text-sm sm:text-base">
                {product.rating} ({product.reviews} Reviews)
              </span>

            </div>

            <p className="mt-6 text-gray-600 leading-8 text-sm sm:text-base">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mt-8 flex-wrap">

              <span className="text-3xl sm:text-4xl font-bold text-blue-600">
                ₹{product.price}
              </span>

              <span className="text-xl sm:text-2xl line-through text-gray-400">
                ₹{product.oldPrice}
              </span>

            </div>

            {/* Quantity */}

            <div className="mt-10">

              <h3 className="font-semibold mb-4">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  -
                </button>

                <span className="text-xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>

              </div>

            </div>
                        {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <button
                onClick={handleAddToCart}
                className="
                  w-full
                  sm:w-auto
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Add To Cart
              </button>

              <button
                className="
                  w-full
                  sm:w-auto
                  border-2
                  border-blue-600
                  text-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Buy Now
              </button>

            </div>

            {/* Features */}

            <div className="mt-12 space-y-5 text-gray-700">

              <div className="flex items-center gap-4">
                <FaTruck className="text-green-600 text-xl flex-shrink-0" />
                <span>Free Shipping Available</span>
              </div>

              <div className="flex items-center gap-4">
                <FaShieldAlt className="text-blue-600 text-xl flex-shrink-0" />
                <span>100% Secure Payment</span>
              </div>

              <div className="flex items-center gap-4">
                <FaUndo className="text-orange-500 text-xl flex-shrink-0" />
                <span>Easy 7 Days Return</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Related Products */}

      <RelatedProducts currentProduct={product} />
<Footer />
    </>
  );
}

export default ProductDetails;