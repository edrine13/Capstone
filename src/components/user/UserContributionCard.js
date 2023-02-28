import React, { useContext, useEffect, useState, useMemo } from 'react';
import { Table } from 'react-bootstrap';
import userContext from '../../store/context/users-context';
import { getAllContributionTransaction, getAllUser } from '../../store/api/api';

const UserContributionCard = () => {
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
    <div className="card-body">
      <h4 className="card-title my-3">Latest Contributions</h4>
      {currentUserContri.length == 0 ? (
        'No Contribution'
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>TSeqNo</th>
              <th>Period Covered</th>
              <th>Amount{''}</th>
            </tr>
          </thead>
          <tbody>
            {currentUserContri
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 5)
              .map((user, index) => {
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
      )}
    </div>
  );
};

export default UserContributionCard;
