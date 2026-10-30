

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF9F6]/90 backdrop-blur-md border-b border-[#E5E5E5]/50 font-sans">
      {/* Inner container */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer z-50" onClick={closeMenu}>
          <img
            src="/logoicon.png"
            alt="ScrollSell logo"
            className="w-10 h-auto object-contain"
          />
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="/" className="hover:text-[#9B51E0] transition-colors">Home</a>
          <a href="/community" className="hover:text-[#9B51E0] transition-colors">Community</a>
          <a href="/support" className="hover:text-[#9B51E0] transition-colors">Support</a>
        </nav>

        {/* Desktop Buttons (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-3">
          <button className="bg-linear-to-r from-[#9B51E0] to-[#D25BFA] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition cursor-pointer shadow-sm">
            Download on iOS
          </button>
          <button className="bg-transparent border border-[#9B51E0] text-[#9B51E0] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#F4F0FF] transition cursor-pointer">
            Get it on Android
          </button>
        </div>

        {/* Mobile Hamburger Button (Visible on Mobile/Tablet) */}
        <button 
          className="lg:hidden text-gray-900 p-2 z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#FBF9F6] border-b border-[#E5E5E5]/50 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible h-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-4 text-base font-medium text-gray-800">
            <a href="/" onClick={closeMenu} className="hover:text-[#9B51E0] transition-colors">Home</a>
            <a href="/community" onClick={closeMenu} className="hover:text-[#9B51E0] transition-colors">Community guidelines</a>
            <a href="/support" onClick={closeMenu} className="hover:text-[#9B51E0] transition-colors">Help & support</a>
          </nav>

          {/* Divider */}
          <hr className="border-[#E5E5E5]" />

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-linear-to-r from-[#9B51E0] to-[#D25BFA] text-white px-5 py-3 rounded-full text-sm font-bold hover:opacity-90 transition cursor-pointer shadow-sm">
              Download on iOS
            </button>
            <button className="w-full bg-transparent border border-[#9B51E0] text-[#9B51E0] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#F4F0FF] transition cursor-pointer">
              Get it on Android
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}