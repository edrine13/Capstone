import React from "react";
import style from "./UserManagement.module.css";

const UserManagement = () => {
  return (
    <section
      className={`${style.userSection} 
    ${style.side}`}
    >
      <div className="container-fluid text-center p-5">
        <h1 className="">User Management </h1>
        <div className={`row ${style["bg"]} p-2`}>
          {/* ID COLUMN */}
          <div className="col-4 text-center">
            <h2>ID</h2>
            <div className="row text-center ">
              <p>234iho3424</p>
            </div>
          </div>
          {/* NAME COLUMN */}
          <div className="col-4 text-center">
            <h2>Name</h2>
            <div className="row text-center">
              <p>asdfasdfasdfoin</p>
            </div>
          </div>
          {/* EMAIL ADDRESS COLUMN */}
          <div className="col-4 text-center">
            <h2>Email</h2>
            <div className="row text-center">
              <p>testEmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserManagement;
