import React from "react";
import classes from "./ButtonComponent.module.css";

const ButtonComponent = (props) => {
  return (
    <button className={classes.buttonComponent} type={props.type}>
      {props.children}
    </button>
  );
};

export default ButtonComponent;
