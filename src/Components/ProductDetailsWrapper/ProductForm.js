import React, { useState } from "react";
import classes from "./ProductForm.module.css";
import ButtonComponent from "../UI/ButtonComponent";
import ShoppingCartIcon from "../UI/ShoppingCartIcon";
// import IconMinus from

const ProductForm = (props) => {
  const [counterState, setCounterState] = useState(1);

  const incrementHandler = () => {
    setCounterState((prev) => {
      return prev + 1;
    });
  };
  const decrementHandler = () => {
    setCounterState((prev) => {
      return prev - 1;
    });
  };

  const productFormSubmitHandler = (e) => {
    e.preventDefault();
    const item = { ...props, amount: counterState };
  };
  return (
    <form className={classes.productForm} onSubmit={productFormSubmitHandler}>
      <div className={classes.productFormControl}>
        <button
          type="button"
          className={classes.productFormButton}
          onClick={decrementHandler}
        >
          -
        </button>
        <span className={classes.productQuantity}>{counterState}</span>
        <button
          type="button"
          className={classes.productFormButton}
          onClick={incrementHandler}
        >
          +
        </button>
      </div>

      <ButtonComponent
        type="submit"
        styles={{ background: "var(--orange)", color: "var(--white)" }}
      >
        <span>
          <ShoppingCartIcon style={{ color: "#fff" }} />
        </span>
        <span>Add to Cart</span>
      </ButtonComponent>
    </form>
  );
};

export default ProductForm;
