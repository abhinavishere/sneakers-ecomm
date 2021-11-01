import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import ButtonComponent from "../UI/ButtonComponent";

const Cart = (props) => {
  const cartItems = [];
  return (
    <Modal onOverlayClick={props.onOverlayClick}>
      {cartItems && cartItems.map((item) => <CartItem {...item} />)}
      <div className={classes.cartTotal}></div>
      <div className={classes.cartActions}>
        <ButtonComponent>Close</ButtonComponent>
      </div>
    </Modal>
  );
};

export default Cart;
