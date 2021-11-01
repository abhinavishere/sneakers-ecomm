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

  const addItemHandler = (e) => {
    e.preventDefault();
    console.log(counterState);
  };
  return (
    <form className={classes.productForm} onSubmit={addItemHandler}>
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

      <ButtonComponent type="submit">
        <span>
          <ShoppingCartIcon style={{ color: "#fff" }} />
        </span>
        <span>Add to Cart</span>
      </ButtonComponent>
    </form>
  );
};

export default ProductForm;
