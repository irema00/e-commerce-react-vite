import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white drop-shadow-md">
          404
        </h1>
        <p className="text-2xl font-semibold text-white mt-4">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-lg text-white">
          The page you're looking for doesn't exist or an error occurred.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-gray-800 px-6 py-3 mt-6 rounded hover:bg-gray-100 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
