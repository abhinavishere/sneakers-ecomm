import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductDetailsWrapper from "./components/ProductDetailsWrapper/ProductDetailsWrapper";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const showCartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };
  return (
    <CartProvider>
      <div className="App">
        {cartOpen && <Cart onOverlayClick={hideCartHandler} />}
        <Header onCartButtonClick={showCartHandler} />
        <ProductDetailsWrapper />
      </div>
    </CartProvider>
  );
};

export default App;
