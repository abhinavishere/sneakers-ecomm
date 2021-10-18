import React from "react";
import styled from "styled-components";
import styles from "./Header.module.css";
import NavList from "./NavList";
import CartWrapper from "./CartWrapper";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo src="/images/logo.svg" />
      <NavList />
      <CartWrapper />
      <User src="/images/image-avatar.png" />
    </header>
  );
};

const Logo = styled.img`
  max-width: 15rem;
  width: 100%;
  display: block;
  padding-block: 2rem 3rem;
  margin-right: 4rem;
  cursor: pointer;
`;

const User = styled.img`
  display: block;
  width: 4rem;
  height: 4rem;
`;

export default Header;
