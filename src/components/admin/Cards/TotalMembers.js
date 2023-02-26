import React from 'react';
import { Link } from 'react-router-dom';
import style from './TotalMembers.module.css';

const TotalMembers = (props) => {
  return (
    <div
      className={` card text-white ${
        props.className ? props.className : 'bg-primary'
      } mb-3  `}
    >
      <div
        className={`${style.totalMembers} card-body d-flex justify-content-between   `}
      >
        <div className="d-block fw-bold flex-shrink-0">
          <h3 className="card-text">{props.children}</h3>
          <p>{props.value}</p>
        </div>
        {/* fontAwesome logo of people should put here  */}
      </div>
      <Link
        to={props.to}
        className={`${style['card-button']} card-footer d-flex  justify-content-between `}
      >
        {props.buttonTitle}
        <span>&rarr;</span>
      </Link>
    </div>
  );
};

export default TotalMembers;
