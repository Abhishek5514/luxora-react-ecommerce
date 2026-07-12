import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

function Navbar() {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">

        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

          <Link
            to="/"
            className="text-2xl lg:text-3xl font-extrabold text-blue-600 tracking-wide"
          >
            LUXORA
          </Link>

          <nav className="hidden lg:block">

            <ul className="flex items-center gap-8 text-lg font-medium">

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "hover:text-blue-600 transition"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold"
                      : "hover:text-blue-600 transition"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
  <NavLink
    to="/new-arrivals"
    className={({ isActive }) =>
      isActive
        ? "text-blue-600 font-bold"
        : "hover:text-blue-600 transition"
    }
  >
    New Arrivals
  </NavLink>
</li>

             <li>
  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive
        ? "text-blue-600 font-bold"
        : "hover:text-blue-600 transition"
    }
  >
    Contact
  </NavLink>
</li>

            </ul>

          </nav>

          <div className="hidden lg:flex items-center gap-6 text-xl">

            <Link
              to="/shop"
              className="hover:text-blue-600 transition"
            >
              <FaSearch />
            </Link>

            <Link
              to="/wishlist"
              className="relative hover:text-red-500 transition"
            >
              <FaHeart />

              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}

            </Link>

            <Link
              to="/cart"
              className="relative hover:text-blue-600 transition"
            >
              <FaShoppingCart />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}

            </Link>

            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              <FaUser />
            </Link>

          </div>

          <div className="flex lg:hidden items-center gap-5 text-xl">

            <Link
              to="/cart"
              className="relative"
            >
              <FaShoppingCart />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}

            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl"
            >
              <FaBars />
            </button>

          </div>

        </div>
                {/* Mobile Drawer */}

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40">

            <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6">

              <div className="flex items-center justify-between mb-10">

                <h2 className="text-2xl font-bold text-blue-600">
                  Menu
                </h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl"
                >
                  <FaTimes />
                </button>

              </div>

              <nav>

                <ul className="space-y-6 text-lg font-medium">

                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setMenuOpen(false)}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/shop"
                      onClick={() => setMenuOpen(false)}
                    >
                      Shop
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/new-arrivals"
                      onClick={() => setMenuOpen(false)}
                    >
                      New Arrivals
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li>
                    <Link
                      to="/wishlist"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between"
                    >
                      <span>Wishlist</span>

                      {wishlist.length > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {wishlist.length}
                        </span>
                      )}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/cart"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between"
                    >
                      <span>Cart</span>

                      {totalItems > 0 && (
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {totalItems}
                        </span>
                      )}
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/shop"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <FaSearch />
                      Search
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <FaUser />
                      Account
                    </Link>
                  </li>

                </ul>

              </nav>

            </div>

          </div>
        )}

      </header>
    </>
  );
}

export default Navbar;