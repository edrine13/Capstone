import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <nav className={style.nav}>
      <h1 className={style.logo}>Link Coop</h1>
      <ul>
        <li>About</li>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Header;
