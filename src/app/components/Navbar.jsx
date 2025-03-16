
"use client"
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Code, 
  Layers, 
  Zap, 
  Menu, 
  X, 
  Users, 
  Monitor, 
  Smartphone, 
  Server, 
  Globe, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClasses = scrolled 
    ? "fixed w-full bg-indigo-900/80 backdrop-blur-md shadow-lg transition-all duration-300 z-50" 
    : "fixed w-full bg-transparent transition-all duration-300 z-50";

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
              <img src='./logo.png' className='w-14 h-14'></img>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-white hover:text-teal-300 transition-colors">About</a>
            <a href="/service" className="text-white hover:text-teal-300 transition-colors">Services</a>
            {/* <a href="#portfolio" className="text-white hover:text-teal-300 transition-colors">Portfolio</a> */}
            <a href="/contact" className="text-white hover:text-teal-300 transition-colors">Contact</a>
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a href="/about" className="text-white py-2 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>About</a>
              <a href="/service" className="text-white py-2 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Services</a>
              {/* <a href="#portfolio" className="text-white py-2 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Portfolio</a> */}
              <a href="/contact" className="text-white py-2 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
