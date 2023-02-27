import React, { useContext, useEffect, useState, useMemo } from 'react';
import userContext from '../../../store/context/users-context';
import {
  getAllContributionTransaction,
  getAllUser,
} from '../../../store/api/api';
import { Table } from 'react-bootstrap';
import style from './UserContribution.module.css';
import MyPagination from '../../admin/contribution_Management/MyPagination';

const UserContributions = () => {
  const [userContri, setUserContri] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredContri, setFilteredContri] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const userCtx = useContext(userContext).userData;
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');
  const [query, setQuery] = useState('');

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

  useEffect(() => {
    setFilteredContri(filterContri(query, currentUserContri));
  }, [query, currentUserContri]);

  function filterContri(query) {
    return currentUserContri.filter((row) =>
      row.monthCovered.toLowerCase().includes(query.toLowerCase())
    );
  }

  function handleSearch(event) {
    const query = event.target.value;
    setQuery(query);
    setFilteredContri(filterContri(query));
  }

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPosts = indexOfLastPost - postsPerPage;
  const currentPosts = filteredContri.slice(indexOfFirstPosts, indexOfLastPost);

  // CHANGE PAGE

  const paginate = (pageNumber) => setPage(pageNumber);

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
        <div className="d-flex">
          <h4>Year:</h4>
          <input
            type="text"
            aria-label="Search"
            onChange={handleSearch}
            value={query}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 d-block"
            type="submit"
          >
            View Contribution
          </button>
        </div>
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
            {currentPosts.map((user, index) => {
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
        {/* Pagination */}
        <MyPagination
          postsPerPage={postsPerPage}
          totalPosts={filteredContri.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default UserContributions;
