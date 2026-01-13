// src/pages/Home.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import Contact from '../components/Contact';
import { products } from '../data/products';

const Home = () => {
  return (
    <>
      <div className="text-center py-12 bg-white shadow-sm">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Welcome to ESHOP</h2>
        <p className="text-gray-500">The best products at the best prices</p>
      </div>

      <div className="container mx-auto p-8">
        <h3 className="text-2xl font-bold mb-6 border-b pb-2">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Contact />
    </>
  );
};

export default Home;