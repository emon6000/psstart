import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const { query } = useParams();
  
  // 1. Define the state variable AND the function to update it
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // 2. logic to find matches
    const results = products.filter((product) => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    // 3. Update state (This line should no longer be red)
    setFilteredProducts(results);
    
  }, [query]);

  return (
    <div className="container mx-auto p-8 min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-6">
        Search Results for: <span className="text-blue-600">"{query}"</span>
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-xl">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;