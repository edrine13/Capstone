import React, { useContext, useEffect, useState, useMemo } from 'react';
import userContext from '../../../store/context/users-context';
import { getAllLoan, getAllLoanTransaction } from '../../../store/api/api';
import { Table } from 'react-bootstrap';
import style from './UserLoan.module.css';
import MyPagination from '../../admin/contribution_Management/MyPagination';

const UserLoan = () => {
  const [userContri, setUserContri] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredContri, setFilteredContri] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const userCtx = useContext(userContext).userData;
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [page1, setPage1] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');

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

  const handleSort = (key) => {
    const newData = [...currentUser];
    const order =
      sortKey === key ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';
    newData.sort((a, b) => {
      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setFilteredData(newData);
    setSortOrder(order);
    setSortKey(key);
  };

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

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPosts = indexOfLastPost - postsPerPage;
  const currentPosts = currentUserContri.slice(
    indexOfFirstPosts,
    indexOfLastPost
  );

  const indexOfLastPost1 = page1 * postsPerPage;
  const indexOfFirstPosts1 = indexOfLastPost1 - postsPerPage;
  const currentPosts1 = currentUser.slice(indexOfFirstPosts1, indexOfLastPost1);

  // CHANGE PAGE

  const paginate = (pageNumber) => setPage(pageNumber);
  const paginate1 = (pageNumber) => setPage1(pageNumber);

  return (
    <div className={`pt-5 container ${style.side} ${style.userSection}`}>
      <div className="mt-5">
        <h1>Your Loans</h1>
        <Table responsive>
          <thead>
            <tr>
              <th
                onClick={() => handleSort('loanId')}
                className={sortKey === 'loanId' ? sortOrder : ''}
              >
                Loan ID{''}
                {sortKey === 'loanId' && sortOrder === 'asc' && (
                  <span className="sort-arrow up">▲</span>
                )}
                {sortKey === 'loanId' && sortOrder === 'desc' && (
                  <span className="sort-arrow down">▼</span>
                )}
              </th>
              <th
                onClick={() => handleSort('loanType')}
                className={sortKey === 'loanType' ? sortOrder : ''}
              >
                Loan Type{''}
                {sortKey === 'loanType' && sortOrder === 'asc' && (
                  <span className="sort-arrow up">▲</span>
                )}
                {sortKey === 'loanType' && sortOrder === 'desc' && (
                  <span className="sort-arrow down">▼</span>
                )}
              </th>
              <th
                onClick={() => handleSort('loanAmount')}
                className={sortKey === 'loanAmount' ? sortOrder : ''}
              >
                Loan Amount{''}
                {sortKey === 'loanAmount' && sortOrder === 'asc' && (
                  <span className="sort-arrow up">▲</span>
                )}
                {sortKey === 'loanAmount' && sortOrder === 'desc' && (
                  <span className="sort-arrow down">▼</span>
                )}
              </th>
              <th
                onClick={() => handleSort('payableIn')}
                className={sortKey === 'payableIn' ? sortOrder : ''}
              >
                Months Payable{''}
                {sortKey === 'payableIn' && sortOrder === 'asc' && (
                  <span className="sort-arrow up">▲</span>
                )}
                {sortKey === 'payableIn' && sortOrder === 'desc' && (
                  <span className="sort-arrow down">▼</span>
                )}
              </th>
              <th
                onClick={() => handleSort('paidAmount')}
                className={sortKey === 'paidAmount' ? sortOrder : ''}
              >
                Paid Amount{''}
                {sortKey === 'paidAmount' && sortOrder === 'asc' && (
                  <span className="sort-arrow up">▲</span>
                )}
                {sortKey === 'paidAmount' && sortOrder === 'desc' && (
                  <span className="sort-arrow down">▼</span>
                )}
              </th>
              <th
                onClick={() => handleSort('balance')}
                className={sortKey === 'balance' ? sortOrder : ''}
              >
                Balance{''}
                {sortKey === 'balance' && sortOrder === 'asc' && (
                  <span className="sort-arrow up">▲</span>
                )}
                {sortKey === 'balance' && sortOrder === 'desc' && (
                  <span className="sort-arrow down">▼</span>
                )}
              </th>
              <th
                onClick={() => handleSort('loanStatus')}
                className={sortKey === 'loanStatus' ? sortOrder : ''}
              >
                Loan Status{''}
                {sortKey === 'loanStatus' && sortOrder === 'asc' && (
                  <span className="sort-arrow up">▲</span>
                )}
                {sortKey === 'loanStatus' && sortOrder === 'desc' && (
                  <span className="sort-arrow down">▼</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPosts1.map((user, index) => {
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
        <MyPagination
          postsPerPage={postsPerPage}
          totalPosts={currentUser.length}
          paginate={paginate1}
        />
      </div>
      <div className="mt-5">
        <h1>Payments</h1>
        <Table responsive>
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
            {currentPosts.map((user, index) => {
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
        {/* Pagination */}
        <MyPagination
          postsPerPage={postsPerPage}
          totalPosts={currentUserContri.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default UserLoan;
