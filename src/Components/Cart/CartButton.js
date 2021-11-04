import React, { useContext } from "react";
import CartContext from "../../store/Cart-Context";
import ShoppingCartIcon from "../UI/ShoppingCartIcon";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((a, b) => {
    return a + b.amount;
  }, 0);

  return (
    <button className={classes.cartButton} onClick={props.onClick}>
      <span className={classes.cartIcon}>
        <ShoppingCartIcon
          style={{ fontSize: "2.2rem", color: "var(--dark-grayish-blue)" }}
        />
      </span>
      <span className={classes.cartLabel}>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
