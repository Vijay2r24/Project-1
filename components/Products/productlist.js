import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { products } from './productData'; // Assuming product data is in a separate file

const product1Image = require('../../assets/product_images/1.jpg');
const product2Image = require('../../assets/product_images/2.jpg');
const product3Image = require('../../assets/product_images/5.jpg');
const product4Image = require('../../assets/product_images/4.jpg');
const product5Image = require('../../assets/product_images/3.jpg');
const product6Image = require('../../assets/product_images/6.jpg');
const product7Image = require('../../assets/product_images/7.jpg');
const product8Image = require('../../assets/product_images/8.jpg');
const product9Image = require('../../assets/product_images/9.jpg');
const product10Image = require('../../assets/product_images/10.jpg');
const product11Image = require('../../assets/product_images/11.jpg');
const product12Image = require('../../assets/product_images/12.jpg');

const products = [
  { id: 1, name: 'Blue and orange Polo T-shirt', image: product1Image, price: '799', color: 'blue', size: 'M', category: 'T-shirt' },
  { id: 2, name: 'Black Flat Knit Men s Polo T-Shirt', image: product2Image, price: '999', color: 'black', size: 'L', category: 'T-shirt' },
  { id: 3, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product3Image, price: '999', color: 'orange', size: 'S', category: 'T-shirt' },
  { id: 4, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product4Image, price: '999', color: 'orange', size: 'M', category: 'T-shirt' },
  { id: 5, name: 'Red Flat Mens Polo T-Shirt', image: product5Image, price: '999', color: 'red', size: 'L', category: 'T-shirt' },
  { id: 6, name: 'Blue Flat Mens Polo T-Shirt', image: product6Image, price: '899', color: 'blue', size: 'S', category: 'T-shirt' },
  { id: 7, name: 'Orange Flat Knit Mens Polo Jeans', image: product7Image, price: '699', color: 'orange', size: 'M', category: 'Jeans' },
  { id: 8, name: 'Red Flat Knit Mens Polo Jeans', image: product8Image, price: '899', color: 'red', size: 'L', category: 'Jeans' },
  { id: 9, name: 'Green Flat Knit Mens Polo Jeans', image: product9Image, price: '999', color: 'green', size: 'S', category: 'Jeans' },
  { id: 10, name: 'Blue Flat Knit Mens Polo Jeans', image: product10Image, price: '1299', color: 'blue', size: 'M', category: 'Jeans' },
  { id: 11, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product11Image, price: '1399', color: 'orange', size: 'L', category: 'T-shirt' },
  { id: 12, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product12Image, price: '1099', color: 'yellow', size: 'M', category: 'T-shirt' },
];

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = products.filter((product) => {
    return (
      (selectedColor === '' || product.color === selectedColor) &&
      (selectedSize === '' || product.size === selectedSize) &&
      (selectedCategory === '' || product.category === selectedCategory)
    );
  });

  return (
    <div className="container mx-auto p-10 mt-10 flex justify-center">
      <div className="w-full max-w-6xl flex">
        <div className="w-1/4 pr-5">
          <h2 className="text-2xl font-bold mb-4 mt-12">Filters</h2>
          <div className="mb-4">
            <label className="block font-bold mb-2">Color</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">All</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">All</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">All</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Jeans">Jeans</option>
            </select>
          </div>
        </div>
        <div className="w-3/4">
          <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-8 mb-4">Our Best Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-2 rounded">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} className="w-full h-90 object-cover mb-4 rounded " />
                  <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
                  <p className="text-gray-600 mb-2 text-center">{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
