"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openPositions = 2;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navClasses = `fixed w-full ${
    scrolled ? "bg-white/50 " : "bg-white"
  } text-black transition-all duration-300 z-50 transform ${
    visible ? "translate-y-0" : "-translate-y-full"
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 py-4 overflow-x-hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center w-40 h-15  rounded-full">
            <img
              src="./logobgwhite.png"
              className="w-full h-full object-cover scale-50"
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 bg-[#122933] p-4 rounded-full">
            {["Home", "Portfolio", "Blog", "Careers"].map((item, i) => (
              <a
                key={i}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white transition-colors underline-hover"
              >
                {item}
                {item === "Career" && (
                  <span className="bg-white text-black text-xs px-2 py-1 rounded-full ml-2">
                    {openPositions}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Contact (desktop only) */}
          <div className="hidden md:block px-8 py-4 rounded-full bg-[#114959]">
            <a
              href="#contact"
              className="text-white hover:text-teal-300 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#122933] p-4 rounded-lg shadow-lg space-y-4">
            {[
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Pricing", href: "/pricing" },
              { name: "Career", href: "#career" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" },
            ].map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="block text-white hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {name}
                {name === "Career" && (
                  <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                    {openPositions} Open
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
