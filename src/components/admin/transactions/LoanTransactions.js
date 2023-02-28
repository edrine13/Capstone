import React, { useContext, useEffect, useState, useMemo } from 'react';
import { getAllLoanTransaction } from '../../../store/api/api';
import { Table } from 'react-bootstrap';
import MyPagination from '../contribution_Management/MyPagination';

const LoanTransactions = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortKey, setSortKey] = useState('');
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllLoanTransaction();
      setUsers(data);
      setFilteredData(data);
    };

    fetchUsers();
  }, [setUsers, getAllLoanTransaction]);

  function filterData(query) {
    return users.filter(
      (row) =>
        row.memberID == query ||
        row.lastName.toLowerCase().includes(query.toLowerCase()) ||
        row.firstName.toLowerCase().includes(query.toLowerCase()) ||
        row.middleName.toLowerCase().includes(query.toLowerCase())
    );
  }

  function handleSearch(event) {
    const query = event.target.value;
    setQuery(query);
    setFilteredData(filterData(query));
  }

  const handleSort = (key) => {
    const newData = [...filteredData];
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

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPosts = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPosts, indexOfLastPost);

  // CHANGE PAGE

  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div className="mt-5 container">
      <h1 className="text-center py-5">Loan Transactions </h1>
      <div className="d-flex">
        <input
          className="form-control mr-sm-2 d-block"
          type="search"
          placeholder="Search Name, Gender"
          aria-label="Search"
          onChange={handleSearch}
          value={query}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 d-block"
          type="submit"
        >
          Search
        </button>
      </div>
      <Table responsive hover>
        <thead>
          <tr>
            <th
              onClick={() => handleSort('memberID')}
              className={sortKey === 'memberID' ? sortOrder : ''}
            >
              Member ID{''}
              {sortKey === 'memberID' && sortOrder === 'asc' && (
                <span className="sort-arrow up">▲</span>
              )}
              {sortKey === 'memberID' && sortOrder === 'desc' && (
                <span className="sort-arrow down">▼</span>
              )}
            </th>
            <th
              onClick={() => handleSort('lastName')}
              className={sortKey === 'lastName' ? sortOrder : ''}
            >
              Last Name{''}
              {sortKey === 'lastName' && sortOrder === 'asc' && (
                <span className="sort-arrow up">▲</span>
              )}
              {sortKey === 'lastName' && sortOrder === 'desc' && (
                <span className="sort-arrow down">▼</span>
              )}
            </th>
            <th
              onClick={() => handleSort('firstName')}
              className={sortKey === 'firstName' ? sortOrder : ''}
            >
              First Name{''}
              {sortKey === 'firstName' && sortOrder === 'asc' && (
                <span className="sort-arrow up">▲</span>
              )}
              {sortKey === 'firstName' && sortOrder === 'desc' && (
                <span className="sort-arrow down">▼</span>
              )}
            </th>
            <th
              onClick={() => handleSort('middleName')}
              className={sortKey === 'middleName' ? sortOrder : ''}
            >
              Middle Name{''}
              {sortKey === 'middleName' && sortOrder === 'asc' && (
                <span className="sort-arrow up">▲</span>
              )}
              {sortKey === 'middleName' && sortOrder === 'desc' && (
                <span className="sort-arrow down">▼</span>
              )}
            </th>
            <th
              onClick={() => handleSort('date')}
              className={sortKey === 'date' ? sortOrder : ''}
            >
              Transaction Date{''}
              {sortKey === 'date' && sortOrder === 'asc' && (
                <span className="sort-arrow up">▲</span>
              )}
              {sortKey === 'date' && sortOrder === 'desc' && (
                <span className="sort-arrow down">▼</span>
              )}
            </th>
            <th
              onClick={() => handleSort('tSeqNo')}
              className={sortKey === 'tSeqNo' ? sortOrder : ''}
            >
              TSeqNo{''}
              {sortKey === 'tSeqNo' && sortOrder === 'asc' && (
                <span className="sort-arrow up">▲</span>
              )}
              {sortKey === 'tSeqNo' && sortOrder === 'desc' && (
                <span className="sort-arrow down">▼</span>
              )}
            </th>
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
              onClick={() => handleSort('amount')}
              className={sortKey === 'amount' ? sortOrder : ''}
            >
              Amount{''}
              {sortKey === 'amount' && sortOrder === 'asc' && (
                <span className="sort-arrow up">▲</span>
              )}
              {sortKey === 'amount' && sortOrder === 'desc' && (
                <span className="sort-arrow down">▼</span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.memberID}</td>
                <td>{user.lastName}</td>
                <td>{user.firstName}</td>
                <td>{user.middleName}</td>
                <td>{user.date}</td>
                <td>{user.tSeqNo}</td>
                <td>{user.loanId}</td>
                <td>{user.loanType}</td>
                <td>{user.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* Pagination */}
      <MyPagination
        postsPerPage={postsPerPage}
        totalPosts={filteredData.length}
        paginate={paginate}
      />
    </div>
  );
};

export default LoanTransactions;
