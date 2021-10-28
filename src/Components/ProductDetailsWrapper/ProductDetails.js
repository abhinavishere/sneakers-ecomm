import React from "react";
import classes from "./ProductDetails.module.css";
import ProductForm from "./ProductForm";

const ProductDetails = (props) => {
  return (
    <div className={classes.productDetails}>
      <h5 className={classes.companyName}>{props.companyName}</h5>
      <h1 className={classes.productName}>{props.productName}</h1>
      <p className={classes.productDesc}>{props.productDesc}</p>
      <div className={classes.productPrices}>
        <h1 className={classes.productMainPrice}>
          {`$${props.mainPrice}.00`}
          <span className={classes.discount}>{`${props.discount}%`}</span>
        </h1>
        <h4
          className={classes.productOriginalPrice}
        >{`$${props.originalPrice}.00`}</h4>
        <ProductForm />
      </div>
    </div>
  );
};

export default ProductDetails;
