import React from "react";
import style from "./Section3.module.css";
import LoanProductsCard from "../card/LoanProductsCard";
import { DummyLoanProducts } from "../../store/dummy-data";

const Section3 = (props) => {
  return (
    <section id="cards">
      <div className="container">
        <div className={`${style["section-title"]} my-4 text-center`}>
          <h3>
            <span>Loan</span> Products
          </h3>
        </div>
        <div className="row ">
          {DummyLoanProducts.map((products) => (
            <LoanProductsCard
              key={products.id}
              title={products.title}
              text={products.text}
              image={products.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
