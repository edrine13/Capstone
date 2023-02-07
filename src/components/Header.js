import React, { useState } from 'react';
import style from './Header.module.css';

const Header = () => {
  const [added, setAdded] = useState(false);
  const onClickHandler = () => {
    setAdded(true);
  };

  return (
    <nav className={style.nav} onClick={onClickHandler}>
      <h1 className={style.logo}>Link Coop</h1>
      <ul>
        {added ? (
          <>
            <li>About</li>
            <li>About</li>
            <li>About</li>
            <li>About</li>
          </>
        ) : (
          ''
        )}
      </ul>
    </nav>
  );
};

export default Header;
