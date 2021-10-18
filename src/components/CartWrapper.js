import React from "react";
import styles from "./CartWrapper.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "./Cart";
import styled from "styled-components";

const CartWrapper = () => {
  return (
    <div className={styles.cartWrapper}>
      <ShoppingCartIconWrapper>
        <ShoppingCartOutlinedIcon className={styles.cartIcon} />
        <CartItemCount>3</CartItemCount>
      </ShoppingCartIconWrapper>
      <Cart />
    </div>
  );
};

const ShoppingCartIconWrapper = styled.div`
  position: relative;
  /* border: 1px solid red; */
`;

const CartItemCount = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -0.3rem;
  right: -0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  background: rgb(255, 102, 47);
  color: #fff;
  font-weight: 500;
  text-align: center;
`;

export default CartWrapper;
