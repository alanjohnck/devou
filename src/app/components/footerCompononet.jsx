"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-fit flex  justify-between items-center px-10 py-8 bg-white text-black  ">
      {/* Left: Logo and Links */}
      <div className="flex flex-col gap-6 items-center sm:items-start ">
        <ul className="space-y-4 text-sm sm:text-base">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#careers" className="hover:underline">Careers</a></li>
          <li><a href="#careers" className="hover:underline">Contact</a></li>

        </ul>
      </div>

      {/* Right: Social Media Links */}
      <div className="flex flex-col gap-6  sm:mt-0 ">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Instagram
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
