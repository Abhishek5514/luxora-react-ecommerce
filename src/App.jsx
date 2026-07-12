import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import NewArrivals from "./pages/NewArrivals/NewArrivals";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Wishlist from "./pages/Wishlist/Wishlist";

import Contact from "./pages/Contact/Contact";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route
          path="/new-arrivals"
          element={<NewArrivals />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        <Route
  path="*"
  element={<NotFound />}
/>
      </Routes>
    </>
  );
}

export default App;