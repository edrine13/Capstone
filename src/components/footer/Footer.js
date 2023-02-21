import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${style.footer} py-3`}>
      <div className="container d-flex justify-content-evenly">
        <div className="row text-center">
          <h2>© Link Coop</h2>
          <div className="col-12 col-sm-3">
            <Link to={"/faqs"}>FAQs</Link>
          </div>
          <div className="col-12 col-sm-3">
            <Link to={"/privacy"}>Privacy</Link>
          </div>
          <div className="col-12 col-sm-3 bb">
            <Link to={"/about"}>About Us</Link>
          </div>
          <div className="col-12 col-sm-3 bb">
            <Link to={"/terms"}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
