// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Brand/Copyright */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">ESHOP</h2>
            <p className="text-sm text-gray-400">© 2024 Eshop Inc. All rights reserved.</p>
          </div>

          {/* Social Links (Placeholders) */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;