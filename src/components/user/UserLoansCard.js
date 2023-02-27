import React, { useContext, useEffect, useState, useMemo } from 'react';
import { Table } from 'react-bootstrap';
import userContext from '../../store/context/users-context';
import { getAllLoan, getAllUser } from '../../store/api/api';

const UserLoansCard = () => {
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
      const datas = await getAllLoan();
      setUserContri(datas);
    };

    fetchUsersContri();
  }, [setUserContri, getAllLoan]);

  const currentUserContri = useMemo(
    () =>
      userContri.filter((row) =>
        row.email.toLowerCase().includes(userCtx.email)
      ),
    [userContri, userCtx.email]
  );

  const activeLoans = useMemo(
    () => currentUserContri.filter((row) => row.loanStatus == 'Active'),
    [currentUserContri]
  );

  return (
    <div className="card-body">
      <h4 className="card-title my-3">Active Loans</h4>
      {activeLoans.length == 0 ? (
        'No Active Loans'
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Loan Type</th>
              <th>Loan Amount</th>
              <th>Paid Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {activeLoans
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 5)
              .map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.loanType}</td>
                    <td>{user.loanAmount}</td>
                    <td>{user.paidAmount}</td>
                    <td>{user.balance}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserLoansCard;
