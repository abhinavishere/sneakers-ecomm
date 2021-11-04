import React from "react";
import classes from "./ProductDetailsWrapper.module.css";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

const productDetails = {
  id: "p1",
  companyName: "Sneaker Company",
  productName: "Fall Limited Edition Sneakers",
  productDesc:
    "These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand anything the weather can offer.",
  mainPrice: 125,
  discount: 50,
  originalPrice: 250,
};

const ProductDetailsWrapper = () => {
  return (
    <div className={classes.productWrapper}>
      <ProductGallery />
      <ProductDetails {...productDetails} />
    </div>
  );
};

export default ProductDetailsWrapper;
