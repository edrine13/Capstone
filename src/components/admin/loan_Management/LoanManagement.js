import React, { useState, useEffect, useCallback, useContext } from 'react';
import style from './LoanManagement.module.css';
import { Table } from 'react-bootstrap';
import { getAllLoan, updatedLoans } from '../../../store/api/api';
import MyPagination from '../contribution_Management/MyPagination';
import AddLoanType from './add_LoanType/AddLoanType';
import ApprovedLoan from './add_LoanType/ApprovedLoan';
import AreYouSureModal from './AreYouSureModal';
import { getAllUserPure, addLoanTransaction } from '../../../store/api/api';
import { Alert } from 'react-bootstrap';
import userContext from '../../../store/context/users-context';

const LoanManagement = () => {
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortKey, setSortKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // STATE FOR ALERTS
  const [updated, setUpdated] = useState(false);
  const [paymentsUpdated, setPaymentsUpdated] = useState(false);

  console.log(users);

  // STATE FOR MODAL

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  // STATE FOR CONFIRMATION
  const [loanConfirmation, setLoanConfirmation] = useState(false);

  // CONTEXT
  const userCtx = useContext(userContext);
  const userId = useContext(userContext).userLoanData;

  // SIDE EFFECT TO GET USERS

  useEffect(() => {
    const response = async () => {
      const data = await getAllLoan();
      setUsers(data);
      setFilteredData(data);
    };

    response();
  }, [setUsers, setFilteredData]);

  function filterData(query) {
    return users.filter(
      (row) =>
        row.lastName.toLowerCase().includes(query.toLowerCase()) ||
        row.firstName.toLowerCase().includes(query.toLowerCase()) ||
        row.middleName.toLowerCase().includes(query.toLowerCase()) ||
        row.loanType.toLowerCase().includes(query.toLowerCase())
    );
  }

  // FUNCTION FOR SEARCH
  function handleSearch(event) {
    const query = event.target.value;
    setQuery(query);
    setFilteredData(filterData(query));
  }

  const collectHandler = async (id, loanId) => {
    userCtx.loanHandler(id, loanId);

    setShowModal2((show) => !show);

    if (!loanConfirmation) {
      setLoanConfirmation(true);
      return;
    }
    setIsLoading(true);

    const data = await getAllUserPure();
    let convertData = {};

    for (let user_id in data) {
      console.log(id);
      for (let loan_id in data[id].loan) {
        console.log(id);
        if (+data[id].loan[loanId].balance >= 1) {
          convertData = {
            [loanId]: {
              ...data[id].loan[loanId],
              paidAmount:
                +data[id].loan[loanId].payableInvisible === 1
                  ? +data[id].loan[loanId].paidAmount +
                    +data[id].loan[loanId].balance
                  : Math.ceil(
                      +data[id].loan[loanId].paidAmount +
                        Math.floor(
                          +data[id].loan[loanId].loanAmount /
                            +data[id].loan[loanId].payableIn
                        )
                    ),
              balance:
                +data[id].loan[loanId].payableInvisible === 1
                  ? 0
                  : Math.ceil(
                      +data[id].loan[loanId].balance -
                        Math.floor(
                          +data[id].loan[loanId].loanAmount /
                            +data[id].loan[loanId].payableIn
                        )
                    ),
              payableInvisible: +data[id].loan[loanId].payableInvisible - 1,
            },
          };

          addLoanTransaction(
            {
              tSeqNo: Date.now(),
              paidAmount: +data[id].loan[loanId].paidAmount,
              date: new Date().toISOString().split('T')[0],
              loanType: +data[id].loan[loanId].loanType,
              amount: +data[id].loan[loanId].amount,
              loanId: loanId,
            },
            id
          );
        } else {
          convertData = {
            [loanId]: {
              ...data[id].loan[loanId],
              loanStatus: 'paid',

              balance: 0,
            },
          };
        }

        // PUT LOGIN HERE
        await updatedLoans(convertData, id);
      }
    }
    console.log(convertData);
    setPaymentsUpdated(true);

    setUpdated(true);

    setIsLoading(false);
    setLoanConfirmation(false);

    setTimeout(() => {
      setUpdated(false);
      setPaymentsUpdated(false);
    }, 5000);
  };

  // FOR SORTING
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

  // FOR PAGINATION

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPosts = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPosts, indexOfLastPost);

  console.log(currentPosts);

  // CHANGE PAGE

  const paginate = (pageNumber) => setPage(pageNumber);

  const process = (event) => {
    setLoanConfirmation(true);
  };
  console.log(users);

  let alertMessage = '';
  if (updated) {
    alertMessage =
      'Loan has been approved! Please refresh the page to see changes';
  } else if (paymentsUpdated) {
    alertMessage = 'Payments has been collected! Please refresh to see changes';
  }

  return (
    <section
      className={`${style.userSection} 
${style.side}`}
    >
      <div className="container-fluid text-center p-5">
        <div className="row">
          {updated || paymentsUpdated ? (
            <Alert key="success" variant="success">
              {alertMessage}
            </Alert>
          ) : (
            ''
          )}
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
            {showModal1 ? (
              <ApprovedLoan onClick={() => setShowModal1((show) => !show)} />
            ) : null}
            <button
              className="btn btn-dark"
              onClick={() => setShowModal1(true)}
            >
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
              placeholder="Search Name, Loan Type"
              aria-label="Search"
              onChange={handleSearch}
              value={query}
            />
            {showModal2 ? (
              <AreYouSureModal
                onClick={() => setShowModal2((show) => !show)}
                yesHandler={() => collectHandler(userId.id, userId.loanId)}
                isLoading={isLoading}
              />
            ) : null}
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
                  onClick={() => handleSort('paidAmount')}
                  className={sortKey === 'paidAmount' ? sortOrder : ''}
                >
                  Paid Amount
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
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentPosts.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.lastName}</td>
                    <td>{user.firstName}</td>
                    <td>{user.middleName}</td>
                    <td>{user.nameSuffix ? user.nameSuffix : 'N/A'}</td>
                    <td>{user.loanType}</td>
                    <td>{user.loanAmount}</td>
                    <td>{user.payableIn}</td>

                    <td>{user.paidAmount}</td>
                    <td>{user.balance}</td>
                    <td>{user.date}</td>
                    {console.log(user.loanId)}

                    <td>
                      <button
                        className="btn btn-dark"
                        onClick={() => collectHandler(user.id, user.loanId)}
                      >
                        Collect
                      </button>
                    </td>
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
