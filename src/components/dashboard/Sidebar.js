import React from 'react';
import style from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar" className={`${style.sidebar}`}>
      <ul
        className={`${style['sidebar-nav']} list-unstyled text-decoration-none`}
        id="sidebar-nav"
      >
        <li className={`${style['nav-item']}`}>
          <Link to="/user" className={`${style['nav-link']} collapsed active`}>
            Overview
          </Link>
        </li>

        <li className={`${style['nav-item']}`}>
          <Link to="/" className={`${style['nav-link']} collapsed`}>
            My Profile
          </Link>
        </li>

        <li className={`${style['nav-item']}`}>
          <a className={`${style['nav-link']} collapsed`} href="#">
            <span>My Account</span>
          </a>
        </li>

        <li className={`${style['nav-item']}`}>
          <a className={`${style['nav-link']} collapsed`} href="#">
            <span>Settings</span>
          </a>
        </li>

        <li className={`${style['nav-item']}`}>
          <a className={`${style['nav-link']} collapsed`} href="/">
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
