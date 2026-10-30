import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 font-sans text-center">
      <h1 className="text-8xl md:text-9xl font-serif italic text-[#9B51E0] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Page not found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-linear-to-r from-[#9B51E0] to-[#D25BFA] text-white px-8 py-3 rounded-full font-semibold shadow-sm hover:opacity-90 transition"
      >
        Go back home
      </Link>
    </div>
  );
}