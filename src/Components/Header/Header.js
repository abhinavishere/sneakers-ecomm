import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import NavBar from "./NavBar";
import classes from "./Header.module.css";
import CartButton from "../Cart/CartButton";
import avatar from "../../assets/image-avatar.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/">
        <Logo src={logo} alt="Sneakers" />
      </a>
      <NavBar />
      <CartButton />
      <AvatarWrapper>
        <Avatar src={avatar} alt="user avatar" />
      </AvatarWrapper>
    </header>
  );
};

const Logo = styled.img`
  max-width: 100%;
`;

const AvatarWrapper = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  /* border: 1px solid red; */
`;

const Avatar = styled.img`
  max-width: 100%;
`;

export default Header;
