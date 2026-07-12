import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              LUXORA
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Discover premium fashion with modern style,
              superior quality and timeless elegance.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/shop" className="hover:text-white">
                  Shop
                </Link>
              </li>

              <li>
                <Link to="/wishlist" className="hover:text-white">
                  Wishlist
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Categories
            </h3>

            <ul className="space-y-3">

              <li>Men</li>
              <li>Women</li>
              <li>Shoes</li>
              <li>Bags</li>

            </ul>

          </div>
                    {/* Customer Support */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3">

              <li>Email: support@luxora.com</li>

              <li>Phone: +91 98765 43210</li>

              <li>Mon - Sat : 10 AM - 8 PM</li>

            </ul>

            {/* Social Icons */}

            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-gray-400">

          © 2026 LUXORA. All Rights Reserved.
          <br />
          Made with ❤️ using React & Tailwind CSS.

        </div>

      </div>

    </footer>
  );
}

export default Footer;