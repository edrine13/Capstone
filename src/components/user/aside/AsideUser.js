import React, { useContext } from 'react';
import authContext from '../../../store/context/auth-context';
import style from './Aside.module.css';
import AsideButton from '../../../UI/AsideButton';

const AsideUser = () => {
  const authLogout = useContext(authContext).logout;

  return (
    <aside id="sidebar" className={style.sidebar}>
      <ul className={style['sidebar-nav']} id="sidebar-nav">
        {/* <!-- End Profile Page Nav --> */}
        <AsideButton linkTo={'overview'}>Overview</AsideButton>

        {/* <!-- End F.A.Q Page Nav --> */}

        <AsideButton linkTo={'profile'}>Profile</AsideButton>
        {/* <!-- End Contact Page Nav --> */}

        <AsideButton linkTo={'contribution'}>Contribution</AsideButton>
        {/* <!-- End Register Page Nav --> */}

        <AsideButton linkTo={'loans'}>Loans</AsideButton>
        <AsideButton onClick={authLogout} linkTo={'/'}>
          Logout
        </AsideButton>
      </ul>
    </aside>
  );
};

export default AsideUser;
