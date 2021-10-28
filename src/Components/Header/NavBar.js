import React from "react";
import classes from "./NavBar.module.css";

const navMenu = ["Collections", "Men", "Women", "About", "Contact"];

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      <a href={`/${props.children}`} className={classes.navItemLink}>
        {props.children}
      </a>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <ul className={classes.navBarList}>
        {navMenu.length > 0 &&
          navMenu.map((item, index) => <NavItem key={index}>{item}</NavItem>)}
      </ul>
    </nav>
  );
};

export default NavBar;
