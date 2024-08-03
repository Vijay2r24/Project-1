// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// import { CSSTransition } from "react-transition-group";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for ToastContainer
import Navbar from "./components/Navbar/navBar.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/Loader/Loader";
import ProductDetails from './components/Products/ProductDetails';
import AddToCartPage from './components/addtocart'; // Import the AddToCartPage component
import CheckoutPage from './components/Order/checkoutpage'
import ProductList from './components/Products/productlist'
import Login from './components/Login';


const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


  function App() {
    // const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
  
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     setLoading(false);
    //   }, 2000); // Simulating loading for 1 second. Adjust as needed.
  
    //   return () => clearTimeout(timer);
    // }, []);

    const handleAddToCart = (product) => {
      let cart = [...cartItems, product];
      setCartItems(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    const handleRemoveFromCart = (index) => {
      let cart = [...cartItems];
      cart.splice(index, 1);
      setCartItems(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    const handleMoveToWishlist = (index) => {
      // Logic to move item to wishlist
      let cart = [...cartItems];
      cart.splice(index, 1);
      setCartItems(cart);
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('Moved to wishlist');
    };
  
  
    return (
      <div>
      <ToastContainer position="bottom-right" />
      <Router>
        <ScrollToTop />
        {
        // !loading
          <Navbar cartItems={cartItems}/>} {/* Render navbar only if not loading */}
        
      
       
     
      <Routes>  
         <Route exact path="/" element={<Home onAddToCart={handleAddToCart}/>} />
         <Route path="/product/:productId" element={<ProductDetails onAddToCart={handleAddToCart}/>} />
         <Route path="/cart" element={<AddToCartPage cartItems={cartItems} onAddToCart={handleAddToCart}/>}  onRemove={handleRemoveFromCart} onMoveToWishlist={handleMoveToWishlist}  />
         <Route path="/checkout/:page" element={<CheckoutPage />} />
         <Route path="/product-list" element={<ProductList />} />
         <Route path="/login" element={<Login  />} />
      </Routes>
        {
        // !loading &&
         <Footer />}
        {/* {loading && <LoadingSpinner />} Display loading spinner while loading */}
      </Router>
    </div>
    
  );
}

export default App;
