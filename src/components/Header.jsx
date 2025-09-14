import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-green-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FoodieHub
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "Menu", "About", "Contact"].map((item, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="text-gray-700 hover:text-green-600 font-medium transition"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Call to Action */}
        <motion.button
          className="hidden md:block bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Order Now
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <motion.div
          className="md:hidden bg-white shadow-lg py-4 space-y-3 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "Menu", "About", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="block text-gray-700 hover:text-green-600 font-medium transition"
            >
              {item}
            </a>
          ))}
          <button className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition">
            Order Now
          </button>
        </motion.div>
      )}
    </header>
  );
}

export default Header;
