import React, { useState, useContext } from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const AuthHeader = ({ onLogout }) => {
  const [added, setAdded] = useState(false);

  const onClickHandler = () => {
    setAdded(!added);
  };
  return (
    <nav
      className={` navbar-light bg-light fixed-top d-flex justify-between px-7 ${style.nav} `}
    >
      <Logo />
      <ul className={`d-flex text-none list-unstyled pt-2 mb-0  `}>
        <li>
          <Link to="/" className={` ${style.link} `}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className={` ${style.link} `}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/" className={` ${style.link} `}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" className={` ${style.link} `}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/" className={` ${style.link} `} onClick={onLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthHeader;
