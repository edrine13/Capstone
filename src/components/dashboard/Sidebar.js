import React from 'react';
import style from './Sidebar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside id="sidebar" className={`${style.sidebar}`}>
      <ul className={`${style['sidebar-nav']}`} id="sidebar-nav">
        <li>
          <Link to="/user" className={`${style.link} collapsed`}>
            <span>
              <FontAwesomeIcon icon={faHouse} className="mx-2" />
              Overview
            </span>
          </Link>
        </li>

        <li>
          <Link to="/" className={`${style.link} collapsed`}>
            <FontAwesomeIcon icon={faUser} className="mx-2" />
            My Profile
          </Link>
        </li>

        <li>
          <Link to="/" className={`${style.link} collapsed`}>
            <FontAwesomeIcon icon={faFileLines} className="mx-2" />
            My Account
          </Link>
        </li>

        <li>
          <Link to="/" className={`${style.link} collapsed`}>
            <FontAwesomeIcon icon={faGear} className="mx-2" />
            Settings
          </Link>
        </li>

        <li>
          <Link to="/" className={`${style.link} collapsed`}>
            <FontAwesomeIcon icon={faArrowRightToBracket} className="mx-2" />
            Sign Out
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
