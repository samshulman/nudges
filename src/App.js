import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsStrat from "./pages/Products-Strat";
import ProductsMini from "./pages/Products-Mini";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import productsMini from "./data/products-mini";

const App = () => {
  const [cart, setCart] = useState([]);
  

  const saveData = () => {
    console.log("Saving data");
    fetch("https://sshulman.pythonanywhere.com/save-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: cart,
        products: productsMini,
        dir_path: "data"
      })
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
  };

  const addToCart = (product) => {
    
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
  
      if (existingItem) {
        // If product exists, update quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If product is new, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleCheckoutFromProduct = () => {
    saveData();
    window.location.hash = "/checkout";
    setCart([]); // Clear the cart
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} handleCheckout={handleCheckoutFromProduct} />} />
        <Route path="/products-strat" element={<ProductsStrat addToCart={addToCart} handleCheckout={handleCheckoutFromProduct} />} />
        <Route path="/products-mini" element={<ProductsMini addToCart={addToCart} handleCheckout={handleCheckoutFromProduct} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} clearCart={() => setCart([])} saveData={saveData} />} />
      </Routes>
    </div>
  );
};


export default App;
