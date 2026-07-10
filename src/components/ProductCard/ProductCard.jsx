import { FaHeart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

      {/* Image */}
      <div className="relative overflow-hidden">

        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full z-10">
          SALE
        </span>

        <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-red-500 hover:text-white transition">
          <FaHeart />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-center gap-1 text-yellow-500 mb-3">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
          <span className="text-gray-500 text-sm ml-2">(4.8)</span>
        </div>

        <h3 className="text-2xl font-semibold">
          {product.name}
        </h3>

        <div className="flex items-center gap-3 mt-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <span className="text-gray-400 line-through">
            ₹{product.price + 500}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-6 w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;