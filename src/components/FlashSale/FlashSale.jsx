import { FaBolt } from "react-icons/fa";

function FlashSale() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Side */}
          <div>
            <div className="flex items-center gap-3">
              <FaBolt className="text-yellow-300 text-3xl" />

              <h2 className="text-5xl font-bold">
                Flash Sale
              </h2>
            </div>

            <p className="mt-6 text-2xl font-semibold">
              Up to 50% OFF
            </p>

            <p className="mt-3 text-lg text-orange-100 max-w-xl">
              Limited-time offers on our best-selling fashion collection.
              Grab your favorites before the sale ends.
            </p>

            <button className="mt-8 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300">
              Shop Sale
            </button>
          </div>

          {/* Right Side */}
          <div className="flex gap-5">

            <div className="bg-white text-black rounded-xl px-6 py-5 text-center shadow-lg">
              <h3 className="text-4xl font-bold">12</h3>
              <p>Hours</p>
            </div>

            <div className="bg-white text-black rounded-xl px-6 py-5 text-center shadow-lg">
              <h3 className="text-4xl font-bold">45</h3>
              <p>Minutes</p>
            </div>

            <div className="bg-white text-black rounded-xl px-6 py-5 text-center shadow-lg">
              <h3 className="text-4xl font-bold">18</h3>
              <p>Seconds</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FlashSale;