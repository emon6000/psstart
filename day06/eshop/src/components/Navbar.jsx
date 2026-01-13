// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState(''); // Holds the input text
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = (e) => {
    e.preventDefault(); // Stop page refresh
    if (query.trim()) {
      navigate(`/search/${query}`); // Go to search page
      setQuery(''); // Clear input after search
    }
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo - clickable to go Home */}
        <Link to="/" className="text-2xl font-bold">ESHOP</Link>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200 cursor-pointer">PRODUCTS</Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200 cursor-pointer">CONTACT US</a>
          </li>
        </ul>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex bg-white rounded px-2 py-1">
          <input 
            type="text" 
            placeholder="Search..." 
            className="outline-none text-black px-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="text-blue-600 font-bold">Q</button>
        </form>

      </div>
    </nav>
  );
};

export default Navbar;