import React, { useContext, useEffect, useState, useMemo } from 'react';
import userContext from '../../../store/context/users-context';
import { getAllLoan, getAllLoanTransaction } from '../../../store/api/api';
import { Table } from 'react-bootstrap';
import style from './UserLoan.module.css';

const UserLoan = () => {
  const [userContri, setUserContri] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredContri, setFilteredContri] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const userCtx = useContext(userContext).userData;

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllLoan();
      setUsers(data);
      setFilteredData(data);
    };

    fetchUsers();
  }, [setUsers, getAllLoan]);

  const currentUser = useMemo(
    () =>
      users.filter((row) => row.email.toLowerCase().includes(userCtx.email)),
    [users, userCtx.email]
  );

  useEffect(() => {
    const fetchUsersContri = async () => {
      const data = await getAllLoanTransaction();
      setUserContri(data);
      setFilteredContri(data);
    };

    fetchUsersContri();
  }, [setUserContri, getAllLoanTransaction]);

  const currentUserContri = useMemo(
    () =>
      userContri.filter((row) =>
        row.email.toLowerCase().includes(userCtx.email)
      ),
    [userContri, userCtx.email]
  );

  return (
    <div className={`mt-5 container ${style.side} ${style.userSection}`}>
      <div className="mt-5">
        <h1>Your Loans</h1>
        <Table>
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Loan Amount</th>
              <th>Months Payable</th>
              <th>Paid Amount</th>
              <th>Balance</th>
              <th>Loan Status</th>
            </tr>
          </thead>
          <tbody>
            {currentUser.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.loanId}</td>
                  <td>{user.loanType}</td>
                  <td>{user.loanAmount}</td>
                  <td>{user.payableIn}</td>
                  <td>{user.paidAmount}</td>
                  <td>{user.balance}</td>
                  <td>{user.loanStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="mt-5">
        <h1>Payments</h1>
        <Table>
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>TSeqNo</th>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentUserContri.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.date}</td>
                  <td>{user.tSeqNo}</td>
                  <td>{user.tLoanID}</td>
                  <td>{user.loanType}</td>
                  <td>{Math.floor(user.amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UserLoan;
