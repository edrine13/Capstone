import React, { useState, useEffect } from 'react';
import style from './ContributionManagement.module.css';
import Table from 'react-bootstrap/Table';
import { getAllUser } from '../../../store/api/api';

const ContributionManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const response = async () => {
      const data = await getAllUser();
      setUsers(data);
    };

    response();
  }, [setUsers, getAllUser]);

  return (
    <section className={`${style.side} ${style.userSection}`}>
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
  );
};

export default ContributionManagement;
