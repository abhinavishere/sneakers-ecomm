import React from "react";
import ShoppingCartIcon from "../UI/ShoppingCartIcon";
import classes from "./CartButton.module.css";
// import CartIcon from "./CartIcon";

const CartButton = (props) => {
  return (
    <button className={classes.cartButton} onClick={props.onClick}>
      <span className={classes.cartIcon}>
        {/* <CartIcon /> */}
        <ShoppingCartIcon
          style={{ fontSize: "2.2rem", color: "var(--dark-grayish-blue)" }}
        />
      </span>
      {props.count && <span className={classes.cartLabel}>{props.count}</span>}
    </button>
  );
};

export default CartButton;
