import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename={
        import.meta.env.PROD ? "/luxora-react-ecommerce" : "/"
      }
    >
      <CartProvider>
        <WishlistProvider>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          <App />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);