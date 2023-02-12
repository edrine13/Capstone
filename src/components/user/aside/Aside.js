import React from "react";
import style from "./Aside.module.css";
import AsideButton from "../../../UI/AsideButton";

const Aside = () => {
  return (
    <aside id="sidebar" className={style.sidebar}>
      <ul className={style["sidebar-nav"]} id="sidebar-nav">
        {/* <!-- End Profile Page Nav --> */}
        <AsideButton linkTo={"overview"}>Overview</AsideButton>

        {/* <!-- End F.A.Q Page Nav --> */}

        <AsideButton linkTo={"user-management"}>User Management</AsideButton>
        {/* <!-- End Contact Page Nav --> */}

        <AsideButton linkTo={"loan-management"}>Loan Management</AsideButton>
        {/* <!-- End Register Page Nav --> */}

        <AsideButton linkTo={"contribution-management"}>
          Contribution Management
        </AsideButton>
        <AsideButton linkTo={"/"}>Logout</AsideButton>
      </ul>
    </aside>
  );
};

export default Aside;
