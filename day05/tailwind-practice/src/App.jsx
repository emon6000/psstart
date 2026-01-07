import ProductCard from "./components/ProductCard";
import React from 'react';
// import productImage from "./images/image.png";
// import productImage2 from "./images/image.png";
// import productImage3 from "./images/image.png";

const App = () => {
  const products =[
    {
      id:1,
      title:"Wireless Headphones",
      price:99.99,
      category:"Electronics",
      image:"/images/image.png"
    },
    {
      id:2,
      title:"Running Shoes",
      price:79.99,
      category:"Footwear",
      image:"/images/image.png"
    },
    {
      id:3,
      title:"Smartphone",
      price:499.99,
      category:"Electronics",
      image:"/images/image.png"
    },
    {
      id:4,
      title:"Backpack",
      price:29.99,
      category:"Accessories",
      image:"/images/image.png"
    },
    {
      id:5,
      title:"Wrist Watch",
      price:199.99,
      category:"Accessories",
      image:"/images/image.png"
    },
    {
      id:6,
      title:"Sunglasses",
      price:49.99,
      category:"Accessories",
      image:"/images/image.png"
    }
  ]
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default App;