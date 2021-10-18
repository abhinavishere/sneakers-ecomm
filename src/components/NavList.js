import React from "react";
// import NavItem from "./NavItem";
import styles from "./NavList.module.css";

const NavItem = ({ link }) => {
  return (
    <li className={styles.navItem}>
      <a href="/">{link}</a>
      <span className={styles.navActive}></span>
    </li>
  );
};

const navItems = ["Collections", "Men", "Women", "About", "Contact"];

const NavList = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <NavItem key={index} link={item} />
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
