import React, { useState, useEffect } from 'react';
import style from './UserManagement.module.css';
import Table from 'react-bootstrap/Table';
import AddUser from './add_User/AddUser';
import { getAllUser } from '../../../store/api/api';

const UserManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  console.log(users.sort());

  useEffect(() => {
    const response = async () => {
      const data = await getAllUser();
      setUsers(data);
    };

    response();
  }, [setUsers, getAllUser]);
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
        <section>
          <Table responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Suffix</th>
                <th>Gender</th>
                <th>Civil Status</th>
                <th>Birth Date</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Nationality</th>
                <th>Password</th>
                <th>Total Contribution</th>
                <th>Account Status</th>
                <th>Loan Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.lastName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.middleName}</td>
                  <td>{user.suffix ? user.suffix : 'N/A'}</td>
                  <td>{user.gender}</td>
                  <td>{user.civilStatus}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.nationality}</td>
                  <td>{user.password}</td>
                  <td>{user.totalContribution}</td>
                  <td>{user.accountStatus}</td>
                  <td>{user.loanStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    </section>
  );
};

export default UserManagement;
