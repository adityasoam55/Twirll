import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Restaurant Menu</div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-green-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
