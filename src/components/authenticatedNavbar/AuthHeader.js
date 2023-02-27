import React, { useState, useContext } from 'react';
import style from './Header.module.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import authContext from '../../store/context/auth-context';
const AuthHeader = () => {
  // CONTEXT
  const authCtx = useContext(authContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  console.log(authCtx.role);
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
          <Link to="/about" className={` ${style.link} `}>
            About Us
          </Link>
        </li>

        {authCtx.isLoggedIn ? (
          <li>
            <Link to={`/${authCtx.role}`} className={` ${style.link} `}>
              Profile
            </Link>
          </li>
        ) : (
          ''
        )}

        <li>
          {authCtx.isLoggedIn ? (
            <Link to="/" className={` ${style.link} `} onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className={` ${style.link} `}
              onClick={logoutHandler}
            >
              login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default AuthHeader;
