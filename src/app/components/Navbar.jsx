"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";  // Added X import here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Example: Number of open positions (can be fetched dynamically from an API)
  const openPositions = 2; // Replace with dynamic data if needed

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = scrolled
    ? "fixed w-full bg-indigo-900/80 backdrop-blur-md shadow-lg transition-all duration-300 z-50"
    : "fixed w-full bg-indigo-900/80 transition-all duration-300 z-50";

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="./dlogo.png" className="w-22 h-14 scale-170" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-white hover:text-teal-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/service"
              className="text-white hover:text-teal-300 transition-colors"
            >
              Services
            </a>
            <a
              href="/pricing"
              className="text-white hover:text-teal-300 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/career"
              className="text-white hover:text-teal-300 transition-colors"
            >
              Career{" "}
              <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                {openPositions} 
              </span>
            </a>
        
            <a
              href="#contact"
              className="text-white hover:text-teal-300 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="text-white py-2 hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-white py-2 hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="/pricing"
                className="text-white py-2 hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#career"
                className="text-white py-2 hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Career{" "}
                <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                  {openPositions} Open
                </span>
              </a>
              <a
                href="#faq"
                className="text-white py-2 hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-white py-2 hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;