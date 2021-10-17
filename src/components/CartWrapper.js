import React from "react";
import styles from "./CartWrapper.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWrapper = () => {
  return (
    <div className={styles.cartWrapper}>
      <ShoppingCartOutlinedIcon className={styles.cartIcon} />
    </div>
  );
};

// const ShoppingCartOutlinedIcon = styled.img``;

export default CartWrapper;
