import heroImage from "../../assets/hero.png";
import {
  FaShippingFast,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}

        <div className="text-center lg:text-left">

          <span className="inline-block bg-blue-500/20 border border-blue-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
            🔥 New Collection 2026
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mt-8">

            Elevate Your

            <span className="block text-blue-400">
              Style Today
            </span>

          </h1>

          <p className="mt-6 lg:mt-8 text-base sm:text-lg text-gray-300 leading-8 max-w-xl mx-auto lg:mx-0">

            Explore premium fashion with modern design,
            superior quality and timeless elegance.

            Crafted for people who love style,
            comfort and confidence.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-10">

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

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 mt-12">

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

        <div className="flex justify-center lg:justify-end order-first lg:order-last">

          <img
            src={heroImage}
            alt="Fashion Model"
            className="
              w-full
              max-w-[280px]
              sm:max-w-[380px]
              md:max-w-[480px]
              lg:max-w-[650px]
              object-contain
              drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]
            "
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;