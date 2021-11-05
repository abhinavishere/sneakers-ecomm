import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.cartItem}>
      <div className={classes.cartItemDesc}>
        <h1>{props.productName}</h1>
        <div>
          <span className={classes.cartItemPrice}>{`$${props.mainPrice.toFixed(
            2
          )}`}</span>
          <span className={classes.cartItemAmount}>{`X ${props.amount}`}</span>
        </div>
      </div>
      <div className={classes.cartItemActions}>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
