import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import classes from "./CartWrapper.module.css";

const CartWrapper = () => {
  return (
    <div className={classes.cartWrapper}>
      <CartLogo>
        <ShoppingCartOutlinedIcon
          style={{ width: "2.8rem", height: "2.8rem" }}
          className={classes.cartLogo}
        />
      </CartLogo>
      <CartLabel>3</CartLabel>
    </div>
  );
};
const CartLogo = styled.a.attrs({
  href: "/Cart",
})`
  cursor: pointer;
  display: block;
`;
const CartLabel = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background: orangered;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  position: absolute;
  top: -0.2rem;
  right: -0.2rem;
  text-align: center;
`;

export default CartWrapper;
