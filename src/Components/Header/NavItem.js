import React from "react";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      <a href={props.href}>{props.link}</a>
    </li>
  );
};

export default NavItem;
