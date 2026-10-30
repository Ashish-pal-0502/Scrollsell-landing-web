

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-gray-100 pt-20 pb-10 px-6 font-sans relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Logo & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

          {/* Brand Column */}
         <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center mb-3 cursor-pointer">
              <img
                src="/logoicon.png"
                alt="ScrollSell logo"
                className="w-10 h-auto object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              Bharat's video marketplace.
            </p>
          </div>

          {/* Product Column */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col items-start">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-5">
              Product
            </h4>
            <nav className="flex flex-col gap-4 text-sm text-gray-800">
              {/* Changed hover:text-[#0FA958] to hover:text-[#9B51E0] */}
              <a href="/" className="hover:text-[#9B51E0] transition-colors">Home</a>
              <a href="/community" className="hover:text-[#9B51E0] transition-colors">Community guidelines</a>
              <a href="/support" className="hover:text-[#9B51E0] transition-colors">Help & support</a>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-[11px] font-semibold tracking-[0.15em] text-gray-400 uppercase mb-5">
              Legal
            </h4>
            <nav className="flex flex-col gap-4 text-sm text-gray-800">
              {/* Changed hover:text-[#0FA958] to hover:text-[#9B51E0] */}
              <a href="/privacy" className="hover:text-[#9B51E0] transition-colors">Privacy policy</a>
              <a href="/terms" className="hover:text-[#9B51E0] transition-colors">Terms & conditions</a>
              <a href="/delete-account" className="hover:text-[#9B51E0] transition-colors">Delete your account</a>
            </nav>
          </div>

        </div>

        {/* Bottom Section: Copyright & Email + Credit */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200/60 text-[13px] text-gray-400">
          <p>
            © 2026 ScrollSell. Made in India.{' '}
            <span className="hidden sm:inline text-gray-300">•</span>{' '}
            <span className="block sm:inline mt-1 sm:mt-0">
              Developed by{' '}
              <a
                href="https://www.ixtminds.com/"
                target="_blank"
                rel="noopener noreferrer"
                // Changed hover:text-[#0FA958] to hover:text-[#9B51E0]
                className="font-medium text-gray-500 hover:text-[#9B51E0] transition-colors underline-offset-2 hover:underline"
              >
                IXT Minds
              </a>
            </span>
          </p>
          <a
            href="mailto:support@scrollsell.app"
            className="mt-4 md:mt-0 hover:text-gray-600 transition-colors"
          >
            support@scrollsell.app
          </a>
        </div>

      </div>
    </footer>
  );
}