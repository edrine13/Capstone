import React from 'react';
import style from './Error404.module.css';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className={style.mainbox}>
      <div className="d-flex">
        <div className={style.err}>404</div>
      </div>
      <div className={style.msg}>
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <Link to="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  );
};

export default Error404;
