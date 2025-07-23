// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to control the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu's open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the mobile menu after a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#001f3f] shadow-md py-4 fixed top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Site Title - Always visible */}
        <h1>
          <Link
            to="/"
            className="text-white text-xl font-bold transition-transform duration-300 hover:text-gray-300 hover:scale-110"
            onClick={closeMenu} // Close menu if clicking logo in mobile view
          >
            Aishwarya John Pole
          </Link>
        </h1>

        {/* Hamburger Icon for Mobile (visible only on small screens) */}
        {/* 'md:hidden' hides this button on medium screens and larger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation menu" // Accessibility
          >
            {isOpen ? (
              // 'X' icon when menu is open
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links (visible only on medium screens and larger) */}
        {/* 'hidden' hides it by default (on small screens) */}
        {/* 'md:flex' makes it a flex container from medium screens upwards */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white transition-transform duration-300 hover:text-gray-300 hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white transition-transform duration-300 hover:text-gray-300 hover:scale-110"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-white transition-transform duration-300 hover:text-gray-300 hover:scale-110"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="text-white transition-transform duration-300 hover:text-gray-300 hover:scale-110"
            >
              Skills
            </Link>
          </li>
          <li>
            {/* Changed <a> to <Link> and href to to="/resume" */}
            <Link
              to="/resume"
              className="text-white transition-transform duration-300 hover:text-gray-300 hover:scale-110"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown (visible only on small screens when isOpen is true) */}
      {/* 'md:hidden' ensures it's never visible on desktop */}
      {/* Conditional 'block' or 'hidden' based on 'isOpen' state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black pb-3`}>
        <ul className="flex flex-col items-center space-y-4 px-2"> {/* Stack links vertically */}
          <li>
            <Link
              to="/"
              className="block w-full text-center text-white text-lg transition-transform duration-300 hover:text-gray-300 hover:scale-105"
              onClick={closeMenu} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block w-full text-center text-white text-lg transition-transform duration-300 hover:text-gray-300 hover:scale-105"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block w-full text-center text-white text-lg transition-transform duration-300 hover:text-gray-300 hover:scale-105"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="block w-full text-center text-white text-lg transition-transform duration-300 hover:text-gray-300 hover:scale-105"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            {/* Changed <a> to <Link> and to="/resume" */}
            <Link
              to="/resume"
              className="block w-full text-center text-white text-lg transition-transform duration-300 hover:text-gray-300 hover:scale-105"
              onClick={closeMenu}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
