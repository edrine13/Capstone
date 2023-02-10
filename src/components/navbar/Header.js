import React, { useState } from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import { NavLink, Link } from 'react-router-dom';
import DropdownComponent from '../../UI/DropdownButton';
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
          <NavLink to="/" className={` ${style.link} `}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={` ${style.link} `}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={` ${style.link} `}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={` ${style.link} `}>
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/" className={` ${style.link} `}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
