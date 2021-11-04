import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultValue = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // ON ADD
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.mainPrice * action.item.amount;
    let updatedItems;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];
    if (existingItem) {
      let updatedItem;
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      console.log(updatedItem);
      state.items[existingItemIndex] = updatedItem;
      updatedItems = [...state.items];
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // ON Remove
  if (action.type === "REMOVE") {
  }
  return {
    items: state.items,
    totalAmount: state.totalAmount,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultValue);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
