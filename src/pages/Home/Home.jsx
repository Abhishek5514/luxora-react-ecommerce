import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import FlashSale from "../../components/FlashSale/FlashSale";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      <FlashSale />

      <FeaturedProducts />

      <Footer />
    </>
  );
}

export default Home;