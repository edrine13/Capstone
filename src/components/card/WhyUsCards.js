import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './WhyUsCards.module.css';

const WhyUsCards = (props) => {
  return (
    <div
      className={`col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0 `}
    >
      <div
        className={`text-center ${style['icon-box']} ${style['card-section']}`}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className={`${style.icon}`}>{props.icon}</div>
        <h4 className={`${style.title} text-decoration-none my-3`}>
          {props.title}
        </h4>
        <p className={style.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default WhyUsCards;
