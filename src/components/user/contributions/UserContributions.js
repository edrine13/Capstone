import React, { useContext, useEffect, useState, useMemo } from 'react';
import userContext from '../../../store/context/users-context';
import {
  getAllContributionTransaction,
  getAllUser,
} from '../../../store/api/api';
import { Table } from 'react-bootstrap';
import style from './UserContribution.module.css';

const UserContributions = () => {
  const [userContri, setUserContri] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredContri, setFilteredContri] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const userCtx = useContext(userContext).userData;

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUser();
      setUsers(data);
      setFilteredData(data);
    };

    fetchUsers();
  }, [setUsers, getAllUser]);

  const currentUser = useMemo(
    () =>
      users.filter((row) => row.email.toLowerCase().includes(userCtx.email)),
    [users, userCtx.email]
  );

  useEffect(() => {
    const fetchUsersContri = async () => {
      const datas = await getAllContributionTransaction();
      setUserContri(datas);
      setFilteredContri(datas);
    };

    fetchUsersContri();
  }, [setUserContri, getAllContributionTransaction]);

  const currentUserContri = useMemo(
    () =>
      userContri.filter((row) =>
        row.email.toLowerCase().includes(userCtx.email)
      ),
    [userContri, userCtx.email]
  );

  return (
    <div className={`mt-5 container ${style.side} ${style.userSection}`}>
      <h1 className="text-center">Your Contributions</h1>
      {currentUser.map((user, index) => {
        return (
          <div className="d-flex row" key={index}>
            <label className="mt-2">
              <b>Initial Contribution:</b> {user.initialContribution}
            </label>
            <label className="mt-2">
              <b>Last Contribution Date:</b> {user.lastPaid}
            </label>
            <label className="mt-2">
              <b>Total Contribution Count:</b> {user.contributionCount}
            </label>
            <label className="mt-2">
              <b>Total Contribution:</b> {user.totalContribution}
            </label>
          </div>
        );
      })}
      <div className="mt-5">
        <h2>Contributions</h2>
        <Table>
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>TSeqNo</th>
              <th>Period Covered</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentUserContri.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.date}</td>
                  <td>{user.tSeqNo}</td>
                  <td>{user.monthCovered}</td>
                  <td>{user.paidAmount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserContributions;
