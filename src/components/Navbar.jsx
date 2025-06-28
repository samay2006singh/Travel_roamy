import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">MyLogo</h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link to="/explore" className="text-gray-700 hover:text-blue-500">Explore</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className="block py-2 text-gray-700 hover:text-blue-500"> Home</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-500">About</Link>
          <Link to="/explore" className="block py-2 text-gray-700 hover:text-blue-500">Explore</Link>
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
