import React, { useState, useEffect, useCallback } from 'react';
import { Table } from 'react-bootstrap';
import style from './ContributionManagement.module.css';
import { getAllUser, updatedData } from '../../../store/api/api';
import ReloadPage from '../../../helper/ReloadPage';

import MyPagination from './MyPagination';
import AreYouSureModal from './AreYouSureModal';
import {
  getAllUserPure,
  addContributionTransaction,
} from '../../../store/api/api';
import { Alert } from 'react-bootstrap';

const ContributionManagement = () => {
  const [users, setUsers] = useState([]);
  const [transac, setTransac] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  // PROCESS HANDLER

  const process = useCallback(async (event) => {
    setIsLoading(true);
    const data = await getAllUserPure();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const d = new Date();
    let convertData = {};
    console.log(data);

    for (let user_id in data) {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const d = new Date();
      console.log(user_id);
      convertData = {
        [user_id]: {
          ...data[user_id],
          totalContribution:
            +data[user_id].totalContribution +
            +data[user_id].monthlyContribution,

          lastPaid:
            new Date().getFullYear() +
            '-' +
            (new Date().getMonth() + 1) +
            '-' +
            new Date().getDate(),
          contributionCount: data[user_id].contributionCount + 1,
        },
      };
      addContributionTransaction(
        {
          tSeqNo: Date.now(),
          paidAmount: +data[user_id].monthlyContribution,
          date: new Date().toISOString().split('T')[0],
          monthCovered:
            monthNames[d.getMonth()] + '-' + new Date().getFullYear(),
        },
        user_id
      );
      // PUT LOGIN HERE
      await updatedData(convertData);
    }
    setUpdated(true);
    setIsLoading(false);
    setShowModal((modal) => !modal);
    setTimeout(() => {
      setUpdated(false);
    }, 5000);
  }, []);

  return (
    <section
      className={`${style.userSection} 
    ${style.side}`}
    >
      <div className="container-fluid text-center p-5">
        <div className="row">
          {updated ? (
            <Alert key="success" variant="success">
              Contribution deducted successfully! Please refresh the page to see
              changes{' '}
            </Alert>
          ) : (
            ''
          )}
          <div className="col-10">
            <h1 className="">Contribution Management </h1>
          </div>

          <div className="col-2 pt-2">
            {showModal ? (
              <AreYouSureModal
                onClick={() => setShowModal((show) => !show)}
                yesHandler={process}
                isLoading={isLoading}
              />
            ) : null}

            <button
              className="btn btn-dark"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Process
            </button>
          </div>
        </div>
        <section>
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
                <th>id</th>
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
                  onClick={() => handleSort('monthlyContribution')}
                  className={sortKey === 'monthlyContribution' ? sortOrder : ''}
                >
                  Monthly Contribution{''}
                  {sortKey === 'monthlyContribution' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'monthlyContribution' &&
                    sortOrder === 'desc' && (
                      <span className="sort-arrow down">▼</span>
                    )}
                </th>
                <th
                  onClick={() => handleSort('totalContribution')}
                  className={sortKey === 'totalContribution' ? sortOrder : ''}
                >
                  Total Contribution{''}
                  {sortKey === 'totalContribution' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'totalContribution' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('contributionCount')}
                  className={sortKey === 'contributionCount' ? sortOrder : ''}
                >
                  Contribution Count{''}
                  {sortKey === 'contributionCount' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'contributionCount' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('lastPaid')}
                  className={sortKey === 'lastPaid' ? sortOrder : ''}
                >
                  Last Paid{''}
                  {sortKey === 'lastPaid' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'lastPaid' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.middleName}</td>
                    <td>{user.monthlyContribution}</td>
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

export default ContributionManagement;
