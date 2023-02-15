import React, { useState } from 'react';
import style from './UserManagement.module.css';

import AddUser from './add_User/AddUser';

const UserManagement = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section
      className={`${style.userSection} 
    ${style.side}`}
    >
      <div className="container-fluid text-center p-5">
        <div className="row">
          <div className="col-10">
            <h1 className="">User Management </h1>
          </div>
          <div className="col-2 pt-2">
            {showModal ? (
              <AddUser onClick={() => setShowModal((show) => !show)} />
            ) : null}
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>
              Add
            </button>
          </div>
        </div>
        <div className={`row ${style['bg']}`}>
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
