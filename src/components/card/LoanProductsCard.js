import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LoanProductsCard.module.css";

const LoanProductsCard = (props) => {
  return (
    <div class="col-lg-4 col-md-6 my-3">
      <NavLink to="/" className={`${style["card-link"]}`}>
        <div class="card">
          <img
            src={props.image}
            class={`card-img-top ${style.image}`}
            alt={props.alt ? props.alt : ""}
          />
          <div class={`card-body ${style.cardBody}`}>
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default LoanProductsCard;
