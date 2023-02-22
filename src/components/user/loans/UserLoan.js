import React from 'react';
import { Table } from 'react-bootstrap';

const UserLoan = () => {
  return (
    <div className="mt-5 container">
      <div className="mt-5">
        <h1>Your Loans</h1>
        <Table>
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Loan Amount</th>
              <th>Months Payable</th>
              <th>Paid Amount</th>
              <th>Balance</th>
              <th>Date</th>
              <th>Loan Status</th>
            </tr>
          </thead>
        </Table>
      </div>
      <div className="mt-5">
        <h1>Payments</h1>
        <Table>
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>TSeqNo</th>
              <th>Loan ID</th>
              <th>Loan Type</th>
              <th>Amount</th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default UserLoan;
