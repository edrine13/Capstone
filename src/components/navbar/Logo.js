import React from "react";
import style from "./Logo.module.css";
import logo from "./img/logo.png";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logo} />
      <h1 className={style.logoText}>
        <span className="fs-3 fw-bold">Link Coop</span>
      </h1>
    </div>
  );
};

export default Logo;
