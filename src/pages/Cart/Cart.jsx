import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../context/CartContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
  } = useCart();

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 py-12 lg:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 lg:mb-12">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (

            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 lg:p-16 text-center">
<div className="flex justify-center mb-6">
  <FaShoppingCart className="text-6xl text-blue-600" />
</div>

<h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
  Your Cart is Empty
</h2>
              
              <p className="mt-4 text-gray-500">
                Add some amazing products from the Shop page.
              </p>

              <Link
                to="/shop"
                className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Continue Shopping
              </Link>

            </div>

          ) : (

            <>

              <div className="space-y-6">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                  >

                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
                      />

                      <div className="text-center sm:text-left">

                        <h2 className="text-xl sm:text-2xl font-semibold">
                          {item.name}
                        </h2>

                        <p className="text-blue-600 font-bold mt-2">
                          ₹{item.price}
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center justify-center gap-4">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="text-lg sm:text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xl ml-2 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </div>

                ))}

              </div>
                            {/* Order Summary */}

              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-10">

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-6">

                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Total
                  </h2>

                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                    ₹{totalPrice}
                  </span>

                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-8">

                  <Link
                    to="/shop"
                    className="w-full md:w-auto text-center bg-gray-200 hover:bg-gray-300 px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Continue Shopping
                  </Link>

                  <Link
                    to="/checkout"
                    className="w-full md:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Proceed To Checkout
                  </Link>

                  <button
                    onClick={clearCart}
                    className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition"
                  >
                    Clear Cart
                  </button>

                </div>

              </div>

            </>

          )}

        </div>

      </section>
      <Footer />

    </>
  );
}

export default Cart;