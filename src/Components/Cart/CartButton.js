import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../../assets/icon-cart.svg";

const CartButton = (props) => {
  return (
    <button className={classes.cartButton}>
      <span className={classes.cartIcon}>
        <img src={CartIcon} alt="CartIcon" />
      </span>
      {props.count && <span className={classes.cartLabel}>{props.count}</span>}
    </button>
  );
};

export default CartButton;
