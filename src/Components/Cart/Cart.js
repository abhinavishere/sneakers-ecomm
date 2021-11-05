import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import ButtonComponent from "../UI/ButtonComponent";
import CartContext from "../../store/Cart-Context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const incrementItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const decrementItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onOverlayClick={props.onOverlayClick}>
      <ul className={classes.cartList}>
        {cartCtx.items &&
          cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onAdd={incrementItemHandler.bind(null, item)}
              onRemove={decrementItemHandler.bind(null, item.id)}
            />
          ))}
        {cartCtx.items.length === 0 && (
          <h3 className={classes.cartEmpty}>Your Cart is Empty</h3>
        )}
      </ul>
      <div className={classes.cartForm}>
        <div className={classes.cartTotal}>Total: {totalAmount}</div>
        <div className={classes.cartActions}>
          <ButtonComponent
            type="button"
            primary={false}
            onClick={props.onOverlayClick}
          >
            Close
          </ButtonComponent>
          <ButtonComponent type="button" primary={true}>
            Place Order
          </ButtonComponent>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
