import React, { useState, useEffect, useCallback } from 'react';
import { Table } from 'react-bootstrap';
import style from './ContributionManagement.module.css';
import { getAllUser } from '../../../store/api/api';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import MyPagination from './MyPagination';

const ContributionManagement = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    const response = async () => {
      const data = await getAllUser();
      setUsers(data);
    };

    response();
  }, [setUsers, getAllUser]);

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPosts = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPosts, indexOfLastPost);
  console.log(indexOfFirstPosts);
  console.log(indexOfFirstPosts);

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
            <h1 className="">Contribution Management </h1>
          </div>
          <div className="col-2 pt-2">
            {showModal
              ? '<AddUser onClick={() => setShowModal((show) => !show)} />'
              : null}
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>
              Process
            </button>
          </div>
        </div>
        <section>
          <Table responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Suffix</th>
                <th>Gender</th>
                <th>Civil Status</th>
                <th>Birth Date</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Nationality</th>
                <th>Password</th>
                <th>Total Contribution</th>
                <th>Account Status</th>
                <th>Loan Status</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                currentPosts.map((user, index) => {
                  return (
                    <tr>
                      <td>{}</td>
                      <td>{user.id}</td>
                      <td>{user.lastName}</td>
                      <td>{user.firstName}</td>
                      <td>{user.middleName}</td>
                      <td>{user.suffix ? user.suffix : 'N/A'}</td>
                      <td>{user.gender}</td>
                      <td>{user.civilStatus}</td>
                      <td>{user.birthDate}</td>
                      <td>{user.contactNumber}</td>
                      <td>{user.email}</td>
                      <td>{user.nationality}</td>
                      <td>{user.password}</td>
                      <td>{user.totalContribution}</td>
                      <td>{user.accountStatus}</td>
                      <td>{user.loanStatus}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
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

export default ContributionManagement;
