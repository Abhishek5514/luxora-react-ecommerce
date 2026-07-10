import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between gap-12">

        {/* Left Side */}
        <div className="max-w-xl">
          <p className="uppercase tracking-[4px] text-sm font-medium">
            New Collection 2026
          </p>

          <h1 className="text-7xl font-bold leading-tight mt-6">
            Elevate Your
            <br />
            Style Today
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Discover premium fashion designed for people who love quality,
            comfort and modern trends.
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-end flex-1">
          <img
            src={heroImage}
            alt="Fashion Model"
            className="w-[620px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;