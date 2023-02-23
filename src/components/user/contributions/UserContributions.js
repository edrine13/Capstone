import React from 'react';
import { Table } from 'react-bootstrap';
import style from './UserContribution.module.css';

const UserContributions = () => {
  return (
    <div className={`mt-5 container ${style.side} ${style.userSection}`}>
      <h1 className="text-center">Your Contributions</h1>
      <div className="d-flex row">
        <label className="mt-2">Initial Contribution Date:</label>
        <label className="mt-2">Last Contribution Date:</label>
        <label className="mt-2">Total Contribution Count:</label>
        <label className="mt-2">Total Contribution:</label>
      </div>
      <div className="mt-5">
        <h2>Contributions</h2>
        <Table>
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>TSeqNo</th>
              <th>Period Covered</th>
              <th>Amount</th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default UserContributions;
