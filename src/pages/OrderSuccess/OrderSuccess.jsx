import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
function OrderSuccess() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">

          <FaCheckCircle className="text-green-500 text-8xl mx-auto mb-8" />

          <h1 className="text-5xl font-bold">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Thank you for shopping with
            <span className="font-bold text-blue-600"> LUXORA</span>.
            <br />
            Your order has been confirmed and will be processed shortly.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mt-10">
            <h2 className="text-2xl font-bold text-green-700">
              Estimated Delivery
            </h2>

            <p className="text-gray-700 mt-3">
              Within 3 - 5 Business Days
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

            <Link
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Continue Shopping
            </Link>

            <Link
              to="/cart"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              View Cart
            </Link>

          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default OrderSuccess;