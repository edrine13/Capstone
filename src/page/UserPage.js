import React from 'react';
import User from '../components/user/User';
import { Outlet } from 'react-router-dom';
import Aside from '../components/user/aside/AsideUser';

const UserPage = (props) => {
  return (
    <React.Fragment>
      {props.AsideUser} <Outlet />
    </React.Fragment>
  );
};

export default UserPage;
