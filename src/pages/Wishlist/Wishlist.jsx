import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useWishlist } from "../../context/WishlistContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="flex items-center gap-4 mb-10">

          <FaHeart className="text-red-500 text-4xl sm:text-5xl" />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My Wishlist
          </h1>

        </div>

        {wishlist.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md text-center py-16 px-6">

            <h2 className="text-2xl sm:text-3xl font-bold">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 mt-4">
              Save your favourite products here.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Explore Products
            </Link>

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
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        )}

      </section>
    </>
  );
}

export default Wishlist;