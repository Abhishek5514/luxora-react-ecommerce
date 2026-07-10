import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";

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

      <section className="min-h-screen bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-5xl font-bold mb-12">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-16 text-center">
              <h2 className="text-3xl font-bold text-gray-600">
                🛒 Your cart is empty
              </h2>

              <p className="mt-4 text-gray-500">
                Add some amazing products from the Shop page.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-6">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between"
                  >
                    {/* Left */}
                    <div className="flex items-center gap-6">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 rounded-xl object-cover"
                      />

                      <div>
                        <h2 className="text-2xl font-semibold">
                          {item.name}
                        </h2>

                        <p className="text-blue-600 font-bold mt-2">
                          ₹{item.price}
                        </p>
                      </div>

                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-4">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="text-xl font-bold">
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
                        className="text-red-500 text-xl ml-4 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>

                    </div>
                  </div>
                ))}

              </div>

              {/* Summary */}
              <div className="bg-white rounded-2xl shadow-md p-8 mt-10">

                <div className="flex justify-between items-center">

                  <h2 className="text-3xl font-bold">
                    Total
                  </h2>

                  <span className="text-3xl font-bold text-blue-600">
                    ₹{totalPrice}
                  </span>

                </div>

                <button
                  onClick={clearCart}
                  className="mt-8 bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-600 transition"
                >
                  Clear Cart
                </button>

              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
}

export default Cart;