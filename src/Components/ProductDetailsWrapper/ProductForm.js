import React from "react";
import classes from "./ProductForm.module.css";
import ButtonComponent from "../UI/ButtonComponent";
import CartIcon from "../Cart/CartIcon";
// import IconMinus from

const ProductForm = (props) => {
  return (
    <form className={classes.productForm}>
      <div className={classes.productFormControl}>
        <button type="button" className={classes.productFormButton}>
          -
        </button>
        <span className={classes.productQuantity}>1</span>
        <button type="button" className={classes.productFormButton}>
          +
        </button>
      </div>
      {/* <div className={classes.productFormControl}> */}
      <ButtonComponent type="submit">
        <span>
          <CartIcon />
        </span>
        <span>Add to Cart</span>
      </ButtonComponent>
      {/* </div> */}
    </form>
  );
};

export default ProductForm;
