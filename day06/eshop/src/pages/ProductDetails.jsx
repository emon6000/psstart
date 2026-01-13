// src/pages/ProductDetails.jsx
import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products"; // Import data
import ProductCard from "../components/ProductCard"; // Reuse the card for related products

const ProductDetails = () => {
  const { id } = useParams();

  // 1. FIND THE PRODUCT
  // useParams gives us "id" as a string, but our data has numbers.
  // We use parseInt() to convert it.
  const product = products.find((p) => p.id === parseInt(id));

  // 2. HANDLE "NOT FOUND"
  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found!</div>;
  }

  // 3. FIND RELATED PRODUCTS
  // Filter products that have the same category BUT are not the current product
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  // Scroll to top when switching between related products
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container mx-auto p-8">
      {/* --- Main Product Section --- */}
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-md">
        {/* Left: Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Right: Product Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4 text-lg">{product.description}</p>

          <div className="mb-4">
            <span className="font-bold text-gray-700">Category: </span>
            <span className="text-blue-600">{product.category}</span>
          </div>

          <h2 className="text-3xl font-semibold text-green-600 mb-6">
            ${product.price}
          </h2>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition"
              onClick={() => alert("Added to Cart!")}
            >
              Add to Cart
            </button>
            <button
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
              onClick={() => alert("Proceeding to Checkout...")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* --- Related Products Section --- */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 border-b pb-2">
          Related Products
        </h3>

        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
