import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import toast from "react-hot-toast";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success("Removed from Wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to Wishlist");
    }
  };

  return (
    <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

      {/* Image */}

      <div className="relative overflow-hidden">

        <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] sm:text-xs px-3 py-1 rounded-full z-10">
          {product.badge}
        </span>

        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2.5 sm:p-3 rounded-full shadow-lg z-10 transition ${
            inWishlist
              ? "bg-red-500 text-white"
              : "bg-white hover:bg-red-500 hover:text-white"
          }`}
        >
          <FaHeart />
        </button>

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              h-56
              sm:h-64
              lg:h-72
              xl:h-80
              object-cover
              group-hover:scale-110
              transition
              duration-500
              cursor-pointer
            "
          />
        </Link>

      </div>

      {/* Content */}

      <div className="flex flex-col flex-1 p-5 sm:p-6">

        <div className="flex items-center gap-1 text-yellow-500 mb-3">

          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}

          <span className="text-gray-500 text-xs sm:text-sm ml-2">
            ({product.rating})
          </span>

        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold hover:text-blue-600 transition line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mt-2">
          {product.brand}
        </p>
                <div className="flex items-center gap-3 mt-4">

          <span className="text-xl sm:text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <span className="text-sm sm:text-base text-gray-400 line-through">
            ₹{product.oldPrice}
          </span>

        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        <button
          onClick={handleAddToCart}
          className="
            mt-6
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-3
            sm:py-4
            rounded-xl
            font-semibold
            transition
            duration-300
          "
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;