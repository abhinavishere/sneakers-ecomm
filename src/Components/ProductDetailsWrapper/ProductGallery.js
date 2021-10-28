import React from "react";
import classes from "./ProductGallery.module.css";

const images = [
  "image-product-1",
  "image-product-2",
  "image-product-3",
  "image-product-4",
];

const MainImg = (props) => {
  return (
    <div className={classes.productMain}>
      <img src={`/images/${props.src}.jpg`} alt={props.alt} />
    </div>
  );
};

const Thumbnail = (props) => {
  return (
    <div className={classes.productThumbnail}>
      <img src={`/images/${props.src}-thumbnail.jpg`} alt={props.src} />
    </div>
  );
};

const ThumbnailsWrapper = ({ images }) => {
  return (
    <div className={classes.productThumbnailsWrapper}>
      {images.map((item, index) => (
        <Thumbnail src={item} key={index} />
      ))}
    </div>
  );
};

const ProductGallery = () => {
  return (
    <div className={classes.productGallery}>
      <MainImg src="image-product-1" />
      <ThumbnailsWrapper images={images} />
    </div>
  );
};

export default ProductGallery;
