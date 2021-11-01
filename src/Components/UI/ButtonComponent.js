import React from "react";
import classes from "./ButtonComponent.module.css";

const ButtonComponent = (props) => {
  return (
    <button
      className={classes.buttonComponent}
      style={props.styles}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
