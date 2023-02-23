import React, { useState } from 'react';
import style from './Login.module.css';
import plantImage from '../../images/login.png';
import LoginForm from './LoginForm';
import logoImg from '../../images/logo2.png';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <section className={`container ${style.signup} no-gutters  mt-10`}>
      <div className="row">
        <img src={plantImage} className={style['image-fluid']} alt="" />
      </div>
      <div className="col-md-7 px-5 pt-5">
        <img src={logoImg} className="signuplogo" alt="" />
        <h4 className="py-3 max-w-sm">Sign in to your Account</h4>

        <LoginForm onLogin={handleLogin} />
      </div>
    </section>
  );
};

export default Login;
