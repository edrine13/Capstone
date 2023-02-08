import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LoanProductsCard.module.css";

const LoanProductsCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <NavLink to="/" className={`${style["card-link"]}`}>
        <div className="card">
          <img
            src={props.image}
            className={`card-img-top ${style.image}`}
            alt={props.alt ? props.alt : ""}
          />
          <div className={`card-body ${style.cardBody}`}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default LoanProductsCard;
