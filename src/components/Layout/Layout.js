import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../navbar/Header";
import Footer from "../footer/Footer";
import { FormText } from "react-bootstrap";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
