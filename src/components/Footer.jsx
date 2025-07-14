// File: src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Aishwarya John Pole. All rights reserved.
        </p>
        <div className="flex space-x-6 items-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aishwarya-john-pole-b23452236/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:aishwaryajohnpolemadhu@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>

          {/* Phone */}
          <a
            href="tel:+447404648531"
            aria-label="Call"
            className="hover:text-blue-300 transition-colors flex items-center space-x-2"
          >
            <FaPhone size={24} />
  
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/447404648531"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition-colors flex items-center space-x-2"
          >
            <FaWhatsapp size={24} />
           
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
