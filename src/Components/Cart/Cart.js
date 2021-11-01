import React, { useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import ButtonComponent from "../UI/ButtonComponent";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((a, b) => {
    return a + b.price;
  }, 0);
  return (
    <Modal onOverlayClick={props.onOverlayClick}>
      {cartItems && cartItems.map((item) => <CartItem {...item} />)}
      {cartItems.length === 0 && (
        <h3 className={classes.cartEmpty}>Your Cart is Empty</h3>
      )}
      <div className={classes.cartForm}>
        <div className={classes.cartTotal}>Total : ${totalPrice || 0}</div>
        <div className={classes.cartActions}>
          <ButtonComponent
            type="button"
            styles={{
              background: "var(--pale-orange)",
              color: "var(--vary-vark-blue)",
            }}
            onClick={props.onOverlayClick}
          >
            Close
          </ButtonComponent>
          <ButtonComponent
            type="submit"
            styles={{
              background: "var(--orange)",
              color: "var(--white)",
            }}
          >
            Place Order
          </ButtonComponent>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
