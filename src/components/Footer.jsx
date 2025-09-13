import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Restaurant Menu. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Contact Us
          </a>
          <a
            href="#privacy"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
