// import React, { useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Comments from '../comments'; 
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../context/cartContext' ; 
// const responsive = {
//   mobile: {
//     breakpoint: { max: 768, min: 0 },
//     items: 1,
//   },
// };

// const ProductDetails = () => {
//   const { productId } = useParams();
 
//   const { addToCart } = useContext(CartContext); 
//   // const { clearCart } = useContext(CartContext);
//   const { products } = useContext(CartContext);
//   const product = products.find(p => p.id === parseInt(productId));
//   const { buyNowCheckout } = useContext(CartContext);
//   const [selectedImage, setSelectedImage] = useState(product.mainImage);
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [quantity, setQuantity] = useState(1);
//   const navigate = useNavigate();
  
//   if (!products) {
//     return <div>Product not found</div>;
//   }

//   // const addToCart = (product) => {
//   //   console.log(`Product ${product.id} added to cart`);
//   //   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   //   cart.push({ ...product, quantity });
//   //   localStorage.setItem('cart', JSON.stringify(cart));
//   // };


//   // const buyNow = (product) => {
//   //   console.log(`Product ${product.id} added to Buynow`);
//   //   localStorage.setItem('Buynow', JSON.stringify([{ ...product, quantity }]));
//   //   navigate('/checkout');
//   // };

//   const handleAddToCart = () => {
//     const productToAdd = { ...product, quantity };
//     addToCart(productToAdd);
//   };

//   const handleBuyNow = (id) => {
//       buyNowCheckout(id)
//       localStorage.setItem('Buynow', JSON.stringify([product]));
//     navigate('/checkout/buynow');
//   };

//   return (
//     <div>
//     <div className="container mx-auto p-4 mt-24 flex justify-center">
//       <div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
//         <div className="block md:hidden w-full">
//           <Carousel responsive={responsive}>
//             {product.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${product.name} ${index + 1}`}
//                 className="w-full object-cover rounded-md mb-2"
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))}
//           </Carousel>
//         </div>
      
//         <div className="hidden md:flex flex-col md:flex-row items-center">
//           <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-6 lg:w-1/4 lg:mb-20">
//             {product.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${product.name} ${index + 1}`}
//                 className={`w-16 md:w-20 object-cover rounded-md mb-2 cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : 'border'}`}
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))}
//           </div>
//           <img src={selectedImage} alt={product.name} className="w-full md:w-3/4 lg:w-3/4 h-auto object-contain rounded-md mb-4" />
//         </div>
        
//         <div className="md:ml-8 text-center md:text-left">
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <div className="flex items-center justify-center md:justify-start mt-2">
//             <span className="text-2xl font-bold text-green-600">{product.price}</span>
//             <span className="text-xl text-gray-400 line-through ml-2">{product.discountPrice}</span>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-lg font-bold">Color:</h3>
//             <div className="flex justify-center md:justify-start mt-2">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className={`w-8 h-8 rounded-full mr-2 ${selectedColor === color ? 'border-4 border-blue-600' : 'border'} cursor-pointer`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-lg font-bold">Size:</h3>
//             <div className="flex justify-center md:justify-start mt-2">
//               {product.sizes.map((size, index) => (
//                 <div
//                   key={index}
//                   className={` rounded p-3 border mr-4 cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mt-4">
//             <h3 className="text-lg font-bold">Qty:</h3>
//             <div className="flex items-center justify-center md:justify-start mt-2">
//               <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-2 border">-</button>
//               <span className="mx-2">{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">+</button>
//             </div>
//           </div>
//           <div className="mt-4 flex justify-center md:justify-start space-x-4">
//             <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
//                   Add to Cart
//                 </button>
//                 <button onClick={() => handleBuyNow(product.id)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
//                   Buy Now
//                 </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className='w-full '>
//       <Comments />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
// import React, { useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from '../../context/cartContext' ; 
// const responsive = {
//   mobile: {
//     breakpoint: { max: 768, min: 0 },
//     items: 1,
//   },
// };

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const product = products.find(p => p.id === parseInt(productId));
//   const { addToCart } = useContext(CartContext); 
// //   // const { clearCart } = useContext(CartContext);
//     const { products } = useContext(CartContext);
//     const { buyNowCheckout } = useContext(CartContext);
//     const navigate = useNavigate();

//   const [selectedImage, setSelectedImage] = useState(product?.mainImage);
//   const [selectedColor, setSelectedColor] = useState(product?.colors[0].colorCode);
//   const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
//   const [quantity, setQuantity] = useState(1);

//   if (!products) {
//     return <div>Product not found</div>;
//   }

//   // const addToCart = (product) => {
//   //   console.log(`Product ${product.id} added to cart`);
//   //   let cart = JSON.parse(localStorage.getItem('cart')) || [];
//   //   cart.push({ ...product, quantity });
//   //   localStorage.setItem('cart', JSON.stringify(cart));
//   // };
//   const handleAddToCart = () => {
//         const productToAdd = { ...product, quantity };
//          addToCart(productToAdd);
//        };
    
//        const handleBuyNow = (id) => {
//            buyNowCheckout(id)
//            localStorage.setItem('Buynow', JSON.stringify([product]));
//          navigate('/checkout/buynow');
//       };

//   // const buyNow = (product) => {
//   //   console.log(`Buying product ${product.id}`);
//   // };

//   const images = product.colors.find(color => color.colorCode === selectedColor).images;

//   return (
//     <div className="container mx-auto p-4 mt-24 flex justify-center">
//       <div className="flex flex-col md:flex-row max-w-6xl w-full">
//         {/* Mobile carousel */}
//         <div className="block md:hidden w-full mb-4">
//           <Carousel responsive={responsive}>
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${product.name} ${index + 1}`}
//                 className="w-full h-96 object-cover rounded-md mb-4"
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))}
//           </Carousel>
//         </div>
//         {/* Desktop layout */}
//         <div className="flex md:flex-row md:w-full">
//           {/* Small images for larger screens */}
//           <div className="hidden md:flex md:flex-col md:w-1/5 mr-2 space-y-2">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={product.name}
//                 className={`w-40 h-50 object-cover cursor-pointer ${selectedImage === image ? 'border-4 border-blue-500' : ''}`}
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))}
//           </div>
//           {/* Main image for larger screens */}
//           <div className="md:w-4/5 ml-2 mb-4">
//             <img
//               src={selectedImage}
//               alt={product.name}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         </div>
//         {/* Product details */}
//         <div className="md:w-2/5 ml-5">
//           <h2 className="text-4xl font-bold">{product.name}</h2>
//           <p className="mt-4 text-lg text-gray-500">{product.description}</p>
//           <p className="mt-4 text-2xl text-red-600">{product.discountPrice}</p>
//           <p className="mt-2 text-2xl text-green-600">{product.price}</p>
//           <div className="mt-8">
//             <h3 className="text-2xl font-bold">Color:</h3>
//             <div className="flex mt-4 space-x-4">
//               {product.colors.map((color, index) => (
//                 <div
//                   key={index}
//                   className={`w-12 h-12 rounded-full cursor-pointer ${selectedColor === color.colorCode ? 'border-4 border-blue-600' : ''}`}
//                   style={{ backgroundColor: color.colorCode }}
//                   onClick={() => {
//                     setSelectedColor(color.colorCode);
//                     setSelectedImage(color.images[0]);
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="mt-8">
//             <h3 className="text-2xl font-bold">Size:</h3>
//             <div className="flex mt-4 space-x-4">
//               {product.sizes.map((size, index) => (
//                 <div
//                   key={index}
//                   className={`rounded p-4 border cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mt-8">
//             <h3 className="text-2xl font-bold">Qty:</h3>
//             <div className="flex items-center mt-4 space-x-4">
//               <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-4 border">-</button>
//               <span className="text-2xl">{quantity}</span>
//               <button onClick={() => setQuantity(quantity + 1)} className="p-4 border">+</button>
//             </div>
//           </div>
//           {/* <div className="mt-8 flex space-x-8">
//             <button className="w-full md:w-auto p-4 bg-blue-600 text-white rounded" onClick={() => addToCart(product)}>
//               Add to Cart
//             </button>
//             <button className="w-full md:w-auto p-4 bg-green-600 text-white rounded" onClick={() => buyNow(product)}>
//               Buy Now
//             </button>
//           </div> */}
//           <div className="mt-4 flex justify-center md:justify-start space-x-4">
//             <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
//                   Add to Cart
//                  </button>
//                  <button onClick={() => handleBuyNow(product.id)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
//                    Buy Now
//                  </button>
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CartContext } from '../../context/cartContext';

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, buyNowCheckout } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(productId));

  const [selectedImage, setSelectedImage] = useState(product?.mainImage);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].colorCode);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity, selectedColor, selectedSize };
    addToCart(productToAdd);
  };

  const handleBuyNow = (id) => {
    buyNowCheckout(id);
    localStorage.setItem('Buynow', JSON.stringify([{ ...product, quantity, selectedColor, selectedSize }]));
    navigate('/checkout/buynow');
  };

  const images = product.colors.find(color => color.colorCode === selectedColor).images;

  return (
    <div className="container mx-auto p-4 mt-24 flex justify-center">
      <div className="flex flex-col md:flex-row max-w-6xl w-full">
        {/* Mobile carousel */}
        <div className="block md:hidden w-full mb-4">
          <Carousel responsive={responsive}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-96 object-cover rounded-md mb-4"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Carousel>
        </div>
        {/* Desktop layout */}
        <div className="flex md:flex-row md:w-full">
          {/* Small images for larger screens */}
          <div className="hidden md:flex md:flex-col md:w-1/5 mr-2 space-y-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                className={`w-40 h-50 object-cover cursor-pointer ${selectedImage === image ? 'border-4 border-blue-500' : ''}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          {/* Main image for larger screens */}
          <div className="md:w-4/5 ml-2 mb-4">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Product details */}
        <div className="md:w-2/5 ml-5">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <p className="mt-4 text-lg text-gray-500">{product.description}</p>
          <p className="mt-4 text-2xl text-red-600">{product.discountPrice}</p>
          <p className="mt-2 text-2xl text-green-600">{product.price}</p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Color:</h3>
            <div className="flex mt-4 space-x-4">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full cursor-pointer ${selectedColor === color.colorCode ? 'border-4 border-blue-600' : ''}`}
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => {
                    setSelectedColor(color.colorCode);
                    setSelectedImage(color.images[0]);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Size:</h3>
            <div className="flex mt-4 space-x-4">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className={`rounded p-4 border cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold">Qty:</h3>
            <div className="flex items-center mt-4 space-x-4">
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-4 border">-</button>
              <span className="text-2xl">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-4 border">+</button>
            </div>
          </div>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
            <button onClick={() => handleBuyNow(product.id)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
