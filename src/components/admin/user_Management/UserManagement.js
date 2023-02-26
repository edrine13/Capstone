import React, { useState, useEffect, useCallback } from 'react';
import style from './UserManagement.module.css';
import Table from 'react-bootstrap/Table';
import AddUser from './add_User/AddUser';
import {
  getAllUser,
  updatedData,
  getAllUserPure,
} from '../../../store/api/api';
import MyPagination from '../contribution_Management/MyPagination';
import Modal from '../../../UI/modal';
import DataEditor from './edit/DataEditor';
import LoadingSpinner from '../../../UI/LoadingSpinner';

const UserManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [editUser, setEditUser] = useState('');
  const [showForm, setShowForm] = useState(false);

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

  //////////////////////////

  // FUNCTIONS FOR EDIT FORM

  const handleView = (user) => {
    setEditUser(user);
    setShowForm(true);
    console.log(user);
  };

  const closeForm = () => {
    setShowForm((showForm) => !showForm);
  };
  const userEditorSubmitHandler = (user) => {
    return editUser;
  };

  ////////////////////////////

  return (
    <section
      className={`${style.userSection} 
    ${style.side}`}
    >
      <div className="container-fluid text-center p-5">
        <div className="row">
          <div className="col-10">
            <h1 className="">User Management </h1>
            {showForm ? (
              <DataEditor
                onClick={closeForm}
                onSubmit={userEditorSubmitHandler}
              />
            ) : null}
            {showModal ? (
              <AddUser onClick={() => setShowModal((show) => !show)} />
            ) : null}
          </div>
          <div className="col-2 pt-2">
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>
              Add Member
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
                  onClick={() => handleSort('nameSuffix')}
                  className={sortKey === 'nameSuffix' ? sortOrder : ''}
                >
                  Suffix{''}
                  {sortKey === 'nameSuffix' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'nameSuffix' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('gender')}
                  className={sortKey === 'gender' ? sortOrder : ''}
                >
                  Gender{''}
                  {sortKey === 'gender' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'gender' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('civilStatus')}
                  className={sortKey === 'civilStatus' ? sortOrder : ''}
                >
                  Civil Status{''}
                  {sortKey === 'civilStatus' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'civilStatus' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('birthDate')}
                  className={sortKey === 'birthDate' ? sortOrder : ''}
                >
                  Birth Date{''}
                  {sortKey === 'birthDate' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'birthDate' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('contactNumber')}
                  className={sortKey === 'contactNumber' ? sortOrder : ''}
                >
                  Contact No.{''}
                  {sortKey === 'contactNumber' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'contactNumber' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('email')}
                  className={sortKey === 'email' ? sortOrder : ''}
                >
                  Email{''}
                  {sortKey === 'email' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'email' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>
                <th
                  onClick={() => handleSort('nationality')}
                  className={sortKey === 'nationality' ? sortOrder : ''}
                >
                  Nationality{''}
                  {sortKey === 'nationality' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'nationality' && sortOrder === 'desc' && (
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
                  onClick={() => handleSort('accountStatus')}
                  className={sortKey === 'accountStatus' ? sortOrder : ''}
                >
                  Account Status{''}
                  {sortKey === 'accountStatus' && sortOrder === 'asc' && (
                    <span className="sort-arrow up">▲</span>
                  )}
                  {sortKey === 'accountStatus' && sortOrder === 'desc' && (
                    <span className="sort-arrow down">▼</span>
                  )}
                </th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.lastName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.middleName}</td>
                  <td>{user.nameSuffix ? user.nameSuffix : 'N/A'}</td>
                  <td>{user.gender}</td>
                  <td>{user.civilStatus}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.contactNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.nationality}</td>

                  <td>{user.totalContribution}</td>
                  <td>{user.accountStatus}</td>

                  <td>
                    <div>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleView(user)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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

export default UserManagement;
