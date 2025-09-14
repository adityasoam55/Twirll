import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">FoodieHub</h2>
          <p className="text-sm leading-relaxed">
            Delicious meals delivered fresh to your doorstep. Experience the
            taste of happiness with FoodieHub!
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="flex gap-3">
            {["Home", "Menu", "About", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-green-500 transition inline-block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <p>Email: support@foodiehub.com</p>
          <p>Phone: +91 9876543210</p>
          <div className="flex gap-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition"
              >
                <Icon size={20} className="text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FoodieHub. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
