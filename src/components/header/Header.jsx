import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    // Changed to sticky, full width, with background blur
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-200/50">
      {/* Inner container for max-width */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
       <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/ScrollSell.png"
            alt="ScrollSell logo"
            className="w-32 h-auto object-contain"
          />
          
        </Link>

        {/* Top Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="bg-[#111111] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
            Download on iOS
          </button>
          <button className="bg-transparent border border-gray-900 text-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition cursor-pointer">
            Get it on Android
          </button>
        </div>
      </div>
    </header>
  );
}