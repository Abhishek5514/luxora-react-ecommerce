import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-xl w-full text-center">

        <FaExclamationTriangle className="text-yellow-500 text-7xl mx-auto mb-8" />

        <h1 className="text-7xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-5 leading-7">
          Sorry, the page you are looking for doesn't exist
          or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          Go Back Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;