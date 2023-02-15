import React from 'react';
import { Link } from 'react-router-dom';
import style from './AsideButton.module.css';

const AsideButton = (props) => {
  return (
    <li className={`${style['nav-item']} p-10`}>
      <Link
        to={props.linkTo}
        onClick={props.onClick}
        className={`${style['nav-link']} collapsed `}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default AsideButton;
