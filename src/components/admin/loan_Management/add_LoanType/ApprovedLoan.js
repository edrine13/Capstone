import React from 'react';
import Modal from '../../../../UI/modal';
import ApprovedLoanForm from './ApprovedLoanForm';

const ApprovedLoan = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <h1 className="text-center">Encode Approved Loan</h1>
      <ApprovedLoanForm
        onClick={props.onClick}
        isSubmitted={props.isSubmitted}
      />
    </Modal>
  );
};

export default ApprovedLoan;
