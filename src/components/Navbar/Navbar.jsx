import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600 tracking-wide"
        >
          ShopEase
        </Link>

        {/* Navigation */}
        <nav>
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
              <a href="#" className="hover:text-blue-600 transition">
                New Arrivals
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>

          </ul>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-xl">

          <button className="hover:text-blue-600 transition">
            <FaSearch />
          </button>

          <button className="hover:text-red-500 transition">
            <FaHeart />
          </button>

          <Link
            to="/cart"
            className="relative hover:text-blue-600 transition"
          >
            <FaShoppingCart />

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          </Link>

          <button className="hover:text-blue-600 transition">
            <FaUser />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;