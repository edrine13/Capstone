import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../navbar/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
