import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../navbar/Header';
import Footer from '../footer/Footer';
import { FormText } from 'react-bootstrap';
import AuthHeader from '../authenticatedNavbar/AuthHeader';

const Layout = (props) => {
  const style = { minHeight: 'calc(100vh - 125px)' };
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? <AuthHeader onLogout={handleLogout} /> : <Header />}
      <main style={style}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
