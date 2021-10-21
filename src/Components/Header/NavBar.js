import React from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  return <ul className={classes.navbar}>{props.children}</ul>;
};

export default NavBar;
