import React from 'react';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    return (
        <div className='bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
            {/* <img src="{product.image}" alt="{product.name}" className='w-full h-48 object-cover' /> */}
            <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />

            <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
                <p className='text-gray-600 mb-4'>{product.price}</p>

                {/* <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors' 
                onClick={()=>alert(`you clicked on ${product.name}`)}>
                    View Details
                </button> */}
                <Link 
          to={`/product/${product.id}`} 
          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
            </div>            
        </div>
    );
};

export default ProductCard;