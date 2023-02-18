import React from 'react';
import Modal from '../../../../UI/modal';
import AddLoanTypeForm from './AddLoanTypeForm';

const AddLoanType = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <h1 className="text-center">Add Loan Type</h1>
      <AddLoanTypeForm onClick={props.onClick} />
    </Modal>
  );
};

export default AddLoanType;
