import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.svg";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import CartWrapper from "../Cart/CartWrapper";
import User from "../User/UserAvatar";
import Button from "../UI/Button";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <a href="/">
          <img src={logo} alt="Sneakers Logo" />
        </a>
      </div>
      <NavBar>
        <NavItem href="/Collections" link="Collections" />
        <NavItem href="/Men" link="Men" />
        <NavItem href="/Women" link="Women" />
        <NavItem href="/About" link="About" />
        <NavItem href="/Contact" link="Contact" />
      </NavBar>
      <CartWrapper />
      {props.user && <User userInfo={props.user} />}

      {!props.user && <Button type="button">Login</Button>}
    </header>
  );
};

export default Header;
