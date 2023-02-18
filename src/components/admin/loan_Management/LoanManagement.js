import React, { useState, useEffect } from 'react';
import style from './LoanManagement.module.css';
import { Table } from 'react-bootstrap';
import { getAllUser, updatedData } from '../../../store/api/api';
import MyPagination from '../contribution_Management/MyPagination';
import AddLoanType from './add_LoanType/AddLoanType';
import ApprovedLoan from './add_LoanType/ApprovedLoan';

const LoanManagement = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');

  // SIDE EFFECT TO GET USERS

  useEffect(() => {
    const response = async () => {
      const data = await getAllUser();
      setUsers(data);
      setFilteredData(data);
    };

    response();
  }, [setUsers, getAllUser]);

  function filterData(query) {
    return users.filter(
      (row) =>
        row.lastName.toLowerCase().includes(query.toLowerCase()) ||
        row.firstName.toLowerCase().includes(query.toLowerCase()) ||
        row.middleName.toLowerCase().includes(query.toLowerCase()) ||
        row.civilStatus.toLowerCase().includes(query.toLowerCase()) ||
        row.gender.toLowerCase() === query.toLowerCase()
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
    <section
      className={`${style.userSection} 
${style.side}`}
    >
      <div className="container-fluid text-center p-5">
        <div className="row">
          <div className="col-10">
            <h1 className="">Loan Management </h1>
          </div>
          <div className="col-2 pt-2">
            {showModal ? (
              <AddLoanType onClick={() => setShowModal((show) => !show)} />
            ) : null}
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>
              Add Loan Type
            </button>
          </div>
          <div className="col-2 pt-2">
            {showModal ? (
              <ApprovedLoan onClick={() => setShowModal((show) => !show)} />
            ) : null}
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>
              Encode Approved Loan
            </button>
          </div>
        </div>
        <section>
          {/* SEARCH BAR */}
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
          <Table responsive>
            <thead>
              <tr>
                <th>Member ID</th>
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
                  onClick={() => handleSort('nameSuffix')}
                  className={sortKey === 'nameSuffix' ? sortOrder : ''}
                >
                  Suffix
                  {sortKey === 'nameSuffix' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'nameSuffix' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('loanType')}
                  className={sortKey === 'loanType' ? sortOrder : ''}
                >
                  Loan Type
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
                  Loan Amount
                  {sortKey === 'loanAmount' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'loanAmount' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('monthsPayable')}
                  className={sortKey === 'monthsPayable' ? sortOrder : ''}
                >
                  Months Payable
                  {sortKey === 'monthsPayable' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'monthsPayable' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('balance')}
                  className={sortKey === 'balance' ? sortOrder : ''}
                >
                  Balance
                  {sortKey === 'balance' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'balance' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('dateCreated')}
                  className={sortKey === 'dateCreated' ? sortOrder : ''}
                >
                  Date Created
                  {sortKey === 'dateCreated' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'dateCreated' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>

                    <td>{user.totalContribution}</td>
                    <td>{user.contributionCount}</td>
                    <td>{user.lastPaid}</td>
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
        </section>
      </div>
    </section>
  );
};

export default LoanManagement;
