import React from 'react';
import User from '../components/user/User';

import Aside from '../components/user/aside/AsideUser';

const UserPage = (props) => {
  const Active = 'admin';
  return (
    <React.Fragment>
      <Aside />
      <User />
    </React.Fragment>
  );
};

export default UserPage;
