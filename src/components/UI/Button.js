import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={styles.button}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
