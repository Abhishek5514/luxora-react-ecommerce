import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Footer from "../../components/Footer/Footer";
function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    const {
      fullName,
      email,
      phone,
      address,
      city,
      pincode,
    } = formData;

    if (
      !fullName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !pincode
    ) {
      toast.error("Please fill all details");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    clearCart();

    toast.success("Order Placed Successfully");

    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 lg:mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* Billing Details */}

          <div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Billing Details
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

            </div>

          </div>
                    {/* Order Summary */}

          <div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">

              {cartItems.length === 0 ? (

                <p className="text-gray-500 text-center py-6">
                  Your cart is empty.
                </p>

              ) : (

                <div className="space-y-6">

                  {cartItems.map((item) => (

                    <div
                      key={item.id}
                      className="flex justify-between items-center gap-4 border-b pb-4"
                    >

                      <div className="flex-1">

                        <h3 className="font-semibold text-sm sm:text-base">
                          {item.name}
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>

                      </div>

                      <span className="font-bold text-blue-600 whitespace-nowrap">
                        ₹{item.price * item.quantity}
                      </span>

                    </div>

                  ))}

                  <div className="flex justify-between items-center pt-6 border-t">

                    <span className="text-xl sm:text-2xl font-bold">
                      Total
                    </span>

                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                      ₹{totalPrice}
                    </span>

                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    className="
                      w-full
                      mt-8
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      py-4
                      rounded-xl
                      font-semibold
                      transition
                    "
                  >
                    Place Order
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>
<Footer />
    </>
  );
}

export default Checkout;