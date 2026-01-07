import React from 'react';

const ProductCard = ({image,title,price,category}) => {
    return (
        <div className='bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transision-transform duration-300'>
            <div className='h-48 w-full bg-gray-200'>
                <img src={image} alt={title}
                className='h-full w-full object-cover'/>
            </div>
            <div className='p-4'>
                <span className='text-sm font-semibold text-red-500 mb-2'>{category}</span>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <span className='text-xl font-bold text-blue-600'>${price}</span>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300'>Add to Cart</button>
                </div>
            </div>
            
        </div>
    );
};

export default ProductCard;