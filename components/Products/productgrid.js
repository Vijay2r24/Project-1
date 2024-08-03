// import React from 'react';
// import { Link , useNavigate } from 'react-router-dom';
// import 'react-multi-carousel/lib/styles.css';
// import './productgrid.css';

// const product1Image = require('../../assets/product_images/1.jpg');
// const product2Image = require('../../assets/product_images/2.jpg');
// const product3Image = require('../../assets/product_images/5.jpg');
// const product4Image = require('../../assets/product_images/4.jpg');
// const product5Image = require('../../assets/product_images/3.jpg');
// const product6Image = require('../../assets/product_images/6.jpg');
// const product7Image = require('../../assets/product_images/7.jpg');
// const product8Image = require('../../assets/product_images/8.jpg');
// const product9Image = require('../../assets/product_images/9.jpg');
// const product10Image = require('../../assets/product_images/10.jpg');
// const product11Image = require('../../assets/product_images/11.jpg');
// const product12Image = require('../../assets/product_images/12.jpg');

// const products = [
//   { id: 1, name: 'Blue and orange Polo T-shirt', image: product1Image, price: '799' },
//   { id: 2, name: 'Black Flat Knit Men s Polo T-Shirt', image: product2Image, price: '999' },
//   { id: 3, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product3Image, price: '999' },
//   { id: 4, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product4Image, price: '999' },
//   { id: 5, name: 'Red Flat Mens Polo T-Shirt', image: product5Image, price: '999' },
//   { id: 6, name: 'Blue Flat Mens Polo T-Shirt', image: product6Image, price: '899' },
//   { id: 7, name: 'Orange Flat Knit Mens Polo Jeans', image: product7Image, price: '699' },
//   { id: 8, name: 'Red Flat Knit Mens Polo Jeans', image: product8Image, price: '899' },
//   { id: 9, name: 'Green Flat Knit Mens Polo Jeans', image: product9Image, price: '999' },
//   { id: 10, name: 'Blue Flat Knit Mens Polo Jeans', image: product10Image, price: '1299' },
//   { id: 11, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product11Image, price: '1399' },
//   { id: 12, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product12Image, price: '1099' },
// ];


// const ProductCarousel = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto p-10">
//     <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-8 mb-4">Available Products</h1>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
//       {products.map((product) => (
//         <div key={product.id} className="border p-2 rounded">
//           <Link to={`/product/${product.id}`}>
//             <img src={product.image} alt={product.name} className="w-full h-90 object-cover mb-4 rounded" />
//             <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
//             <p className="text-gray-600 mb-2 text-center">{product.price}</p>
//           </Link>
//         </div>
//       ))}
//     </div>
//     <div className="flex justify-center mt-8">
//       <button
//         onClick={() => navigate('/product-list')}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         View All
//       </button>
//     </div>
//   </div>
//   );
// };

// export default ProductCarousel;
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './productgrid.css';

const product1Image = require('../../assets/product_images/1.jpg');
const product2Image = require('../../assets/product_images/2.jpg');
const product3Image = require('../../assets/product_images/5.jpg');
const product4Image = require('../../assets/product_images/4.jpg');
const product5Image = require('../../assets/product_images/3.jpg');
const product6Image = require('../../assets/product_images/6.jpg');
const product7Image = require('../../assets/product_images/white_and_blue_printed_cotton_shirt_zoom_view_16_07_2024_400x533.jpg');
const product8Image = require('../../assets/product_images/black_contrast_stitch_jacket_shirt_for_men_neck_view_10_07_2024_400x533.jpg');
const product9Image = require('../../assets/product_images/arctic_blue_half_sleeves_knitted_mens_shirt_base_09_07_2024_700x933.jpg');
const product10Image = require('../../assets/product_images/grey_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg');
const product11Image = require('../../assets/product_images/11.jpg');
const product12Image = require('../../assets/product_images/12.jpg');
const product13Image = require('../../assets/product_images/Kurti.jpg');
const product14Image = require('../../assets/product_images/Oversized-T-Shirts.jpg');
const product15Image = require('../../assets/product_images/Printed-T-Shirts.jpg');
const product16Image = require('../../assets/product_images/Plain-T-Shirts.jpg');
const product17Image = require('../../assets/product_images/399.jpg');
const product18Image = require('../../assets/product_images/599.jpg');
const product19Image = require('../../assets/product_images/799.jpg');

const products = [
  { id: 1, name: 'Blue and orange Polo T-shirt', image: product1Image, price: '₹799', category: 'T-Shirts' },
  { id: 2, name: 'Black Flat Knit Men\'s Polo T-Shirt', image: product2Image, price: '₹999', category: 'T-Shirts' },
  { id: 3, name: 'Orange Flat Knit Men\'s Polo T-Shirt', image: product3Image, price: '₹999', category: 'T-Shirts' },
  { id: 4, name: 'Orange Flat Knit Men\'s Polo T-Shirt', image: product4Image, price: '₹999', category: 'T-Shirts' },
  { id: 5, name: 'Red Flat Men\'s Polo T-Shirt', image: product5Image, price: '₹999', category: 'T-Shirts' },
  { id: 6, name: 'Blue Flat Men\'s Polo T-Shirt', image: product6Image, price: '₹899', category: 'T-Shirts' },
  { id: 7, name: 'white and blue printed cotton shirt', image: product7Image, price: '₹699', category: 'Shirts' },
  { id: 8, name: 'black contraststitch jacket shirt', image: product8Image, price: '₹899', category: 'Shirts' },
  { id: 9, name: 'arctic blue halfsleeves mens shirt', image: product9Image, price: '₹999', category: 'Shirts' },
  { id: 10, name: 'greycotton\'solid shirt', image: product10Image, price: '₹1299', category: 'Shirts' },
  { id: 11, name: 'Orange Flat Knit Men\'s Polo T-Shirt', image: product11Image, price: '₹1399', category: 'T-Shirts' },
  { id: 12, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product12Image, price: '₹1099', category: 'T-Shirts' },
  { id: 13, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product12Image, price: '₹1099', category: 'Bottomwear' },
  { id: 14, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product12Image, price: '₹1099', category: 'Bottomwear' },
  { id: 15, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product12Image, price: '₹1099', category: 'Bottomwear' },
  { id: 16, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product12Image, price: '₹1099', category: 'Bottomwear' },
  { id: 17, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product13Image, price: '₹1099', category: 'Categories for women' },
  { id: 18, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product14Image, price: '₹1099', category: 'Categories for women' },
  { id: 19, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product15Image, price: '₹1099', category: 'Categories for women' },
  { id: 20, name: 'Yellow Flat Knit Men\'s Polo T-Shirt', image: product16Image, price: '₹1099', category: 'Categories for women' },
  { id: 21, name:'', image: product17Image, price: '', category: 'Discount Zone'},
  { id: 22, name:'', image: product18Image, price: '', category: 'Discount Zone'},
  { id: 23, name:'', image: product19Image, price: '', category: 'Discount Zone'},
  { id: 24, name:'', image: product19Image, price: '', category: 'Discount Zone'},
  
];



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductCarousel = () => {
  const navigate = useNavigate();

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const renderCategory = (category) => (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-800 mt-8 mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.filter(product => product.category === category).map((product) => (
          <div key={product.id} className="border p-2 rounded">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-90 object-cover mb-4 rounded" />
              <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
              <p className="text-gray-600 mb-2 text-center">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-8 mb-4">Available Products</h1>
      {renderCategory('T-Shirts')}
      {renderCategory('Shirts')}
      {renderCategory('Bottomwear')}
      {renderCategory('Categories for women')}
      {renderCategory('Discount Zone')}
    </div>
  );
};

export default ProductCarousel;
