import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Our Team", href: "/staff" },
    { name: "Clinic Policies", href: "/policy/clinic-policies" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
    { name: "Become a Patient", href: "/news/4" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 bg-white/90`}>
      <div className="flex justify-between items-center px-36 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
          <span className="font-bold text-lg text-gray-900 hidden sm:inline">Valleyview</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-medium text-gray-800 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative group hover:text-blue-600 transition">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => window.open("https://ocean.cognisantmd.com/intake/patients.html?linkRef=04f9eeaf-8434-4153-aa26-2d0c910f4020#/online-booking", "_blank")}
            className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:scale-105 transition transform"
          >
            Book Appointment
          </button>
          <Link href="https://www.bookmyshot.com/9054351100" className="px-5 py-2 border border-green-600 text-green-700 rounded-full shadow hover:bg-green-50 transition">
            Pharmacy
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-md hover:bg-gray-100 transition">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <span className="font-bold text-lg text-gray-900">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <HiX size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 mt-6 px-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-800 hover:text-blue-600 text-lg transition" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => window.open("https://ocean.cognisantmd.com/intake/patients.html?linkRef=04f9eeaf-8434-4153-aa26-2d0c910f4020#/online-booking", "_blank")}
            className="mt-4 px-5 py-2 bg-green-600 text-white rounded-full shadow-lg hover:scale-105 transition transform"
          >
            Book Appointment
          </button>
          <Link
            href="https://www.bookmyshot.com/9054351100"
            className="mt-2 px-5 py-2 border border-green-600 text-green-700 rounded-full shadow hover:bg-green-50 transition text-center block"
          >
            Pharmacy
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
