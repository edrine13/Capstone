import React from "react";
import { Outlet } from "react-router-dom";
import Admin from "../components/admin/Admin";

const AdminPage = (props) => {
  return (
    <React.Fragment>
      {props.Aside} <Outlet />
    </React.Fragment>
  );
};

export default AdminPage;
