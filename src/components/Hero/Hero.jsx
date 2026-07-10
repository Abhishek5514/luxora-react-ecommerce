import heroImage from "../../assets/hero.png";
import { FaShippingFast, FaShieldAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>

          <span className="inline-block bg-blue-500/20 border border-blue-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
            🔥 New Collection 2026
          </span>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight mt-8">
            Elevate Your
            <span className="block text-blue-400">
              Style Today
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
            Explore premium fashion with modern design, superior quality,
            and timeless elegance. Crafted for people who love style,
            comfort, and confidence.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <Link
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold shadow-xl transition"
            >
              Shop Now
            </Link>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Explore
            </button>

          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-8 mt-12">

            <div className="flex items-center gap-3">
              <FaShippingFast className="text-2xl text-blue-400" />
              <span>Free Shipping</span>
            </div>

            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-2xl text-green-400" />
              <span>Secure Payment</span>
            </div>

            <div className="flex items-center gap-3">
              <FaStar className="text-2xl text-yellow-400" />
              <span>4.9 Customer Rating</span>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">

          <img
            src={heroImage}
            alt="Fashion Model"
            className="w-full max-w-[650px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;