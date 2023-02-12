import React from "react";
import User from "../components/user/User";
import Aside from "../components/user/aside/Aside";
import { Route } from "react-router-dom";

const UserPage = (props) => {
  const Active = "admin";
  return (
    <React.Fragment>
      {props.Aside}
      <User />
    </React.Fragment>
  );
};

export default UserPage;
