import React from "react";
import ProductDetailsWrapper from "./ProductDetailsWrapper";
import ProductImageGallery from "./ProductImageGallery";

const ProductWrapper = () => {
  return (
    <div>
      <ProductImageGallery />
      <ProductDetailsWrapper />
    </div>
  );
};

export default ProductWrapper;
