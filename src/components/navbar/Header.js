import React, { useState, useContext } from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [added, setAdded] = useState(false);

  const onClickHandler = () => {
    setAdded(!added);
  };
  return (
    <nav
      className={` navbar-light bg-light fixed-top d-flex justify-between px-7 ${style.nav} `}
    >
      <Link to="/" className={` ${style.link} `}>
        <Logo />
      </Link>

      <ul className={`d-flex text-none list-unstyled pt-2 mb-0  `}>
        <li>
          <NavLink to="/" className={` ${style.link} `}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={` ${style.link} `}>
            About Us
          </NavLink>
        </li>
        <li>
          <Link to="/loan-products" className={` ${style.link} `}>
            Loan Products
          </Link>
        </li>
        <li>
          <Link to="/login" className={` ${style.link} `}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className={` ${style.link} `}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/login" className={` ${style.link} `}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
