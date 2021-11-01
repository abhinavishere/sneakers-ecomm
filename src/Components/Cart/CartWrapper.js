import React, { useState } from "react";
import CartButton from "./CartButton";
import Cart from "./Cart";

const CartWrapper = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartButtonHandler = () => {
    setCartOpen(true);
  };

  const overlayHandler = () => {
    setCartOpen(false);
  };
  return (
    <React.Fragment>
      <CartButton count={props.count} onClick={cartButtonHandler} />
      {cartOpen && <Cart onOverlayClick={overlayHandler} />}
    </React.Fragment>
  );
};

export default CartWrapper;
