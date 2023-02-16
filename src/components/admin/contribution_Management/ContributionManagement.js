import React, { useState, useEffect, useCallback } from 'react';
import { Table } from 'react-bootstrap';
import style from './ContributionManagement.module.css';
import { getAllUser, updatedData } from '../../../store/api/api';

import MyPagination from './MyPagination';
import AreYouSureModal from './AreYouSureModal';
import { getAllUserPure } from '../../../store/api/api';

const ContributionManagement = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [updated, setUpdated] = useState(false);

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

  // CHANGE PAGE

  const paginate = (pageNumber) => setPage(pageNumber);

  // PROCESS HANDLER

  const process = useCallback(async (event) => {
    const data = await getAllUserPure();
    let convertData = {};
    console.log(data);

    for (let user_id in data) {
      console.log(user_id);
      convertData = {
        [user_id]: {
          ...data[user_id],
          totalContribution:
            +data[user_id].totalContribution +
            +data[user_id].monthlyContribution,
          lastPaid:
            new Date().getFullYear() +
            '/' +
            (new Date().getMonth() + 1) +
            '/' +
            new Date().getDate(),
          contributionCount: data[user_id].contributionCount + 1,
        },
      };
      // PUT LOGIN HERE
      updatedData(convertData);
    }
    setUpdated(true);
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
          <div className="col-10">
            <h1 className="">Contribution Management </h1>
          </div>
          <div className="col-2 pt-2">
            {showModal ? (
              <AreYouSureModal
                onClick={() => setShowModal((show) => !show)}
                yesHandler={process}
              />
            ) : null}
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

                <th>Total Contribution</th>
                {/* need to make logic for this */}
                <th>Contribution Count</th>
                <th>Last Paid</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                currentPosts.map((user) => {
                  return (
                    <tr>
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

export default ContributionManagement;
