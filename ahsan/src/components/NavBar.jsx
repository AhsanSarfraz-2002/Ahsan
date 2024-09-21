import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
  // State to manage the dropdown menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Gutim" className="h-8 md:h-10" />
        </div>
        <div className="hidden md:flex gap-7 font-semibold text-lg">
          <Link className="hover:text-red-500 transition duration-300" to="/">Home</Link>
          <Link className="hover:text-red-500 transition duration-300" to="/about">About</Link>
          <Link className="hover:text-red-500 transition duration-300" to="/classes">Classes</Link>
          <Link className="hover:text-red-500 transition duration-300" to="/blog">Blog</Link>
          <Link className="hover:text-red-500 transition duration-300" to="/gallery">Gallery</Link>
          <Link className="hover:text-red-500 transition duration-300" to="/contact">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Dropdown menu for mobile and tablet sizes */}
      <div className={`md:hidden flex flex-col gap-4 mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link className="hover:text-red-500 transition duration-300" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link className="hover:text-red-500 transition duration-300" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link className="hover:text-red-500 transition duration-300" to="/classes" onClick={() => setIsMenuOpen(false)}>Classes</Link>
        <Link className="hover:text-red-500 transition duration-300" to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <Link className="hover:text-red-500 transition duration-300" to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
        <Link className="hover:text-red-500 transition duration-300" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
