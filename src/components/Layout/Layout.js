import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../navbar/Header";
import Footer from "../footer/Footer";
import { FormText } from "react-bootstrap";

const Layout = (props) => {
  const style = { minHeight: "calc(100vh - 125px)" };

  return (
    <>
      <Header />
      <main style={style}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
