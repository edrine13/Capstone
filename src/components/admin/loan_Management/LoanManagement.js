import React, { useState, useEffect } from 'react';
import style from './LoanManagement.module.css';
import { Table } from 'react-bootstrap';
import { getAllUser, updatedData } from '../../../store/api/api';
import MyPagination from '../contribution_Management/MyPagination';

const LoanManagement = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  // SIDE EFFECT TO GET USERS

  useEffect(() => {
    const response = async () => {
      const data = await getAllUser();
      setUsers(data);
    };

    response();
  }, [setUsers, getAllUser]);

  // SEARCH
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    console.log(query);
    // Create copy of item list

    // Include all elements which includes the search query
    const updatedList = users.filter(
      (item) =>
        item.lastName.toLowerCase().includes(query) ||
        item.firstName.toLowerCase().includes(query) ||
        item.middleName.toLowerCase().includes(query)
    );

    // Trigger render with updated values
    console.log(updatedList);
    setFilteredList(updatedList);
  };

  // TO CHANGE PAGE
  const paginate = (pageNumber) => setPage(pageNumber);

  // FOR PAGINATION
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPosts = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPosts, indexOfLastPost);
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
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>
              Process
            </button>
          </div>
        </div>
        <section>
          {/* SEARCH BAR */}
          <div className="d-flex">
            <input
              className="form-control mr-sm-2 d-block"
              type="search"
              placeholder="Search Name"
              aria-label="Search"
              onChange={filterBySearch}
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
                <th>ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>

                <th>Total Contribution</th>
                {/* need to make logic for this */}
                <th>Contribution Count</th>
                <th>Last Paid</th>
              </tr>
            </thead>
            <tbody>
              {filteredList.map((user, index) => {
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
            totalPosts={users.length}
            paginate={paginate}
          />
        </section>
      </div>
    </section>
  );
};

export default LoanManagement;
