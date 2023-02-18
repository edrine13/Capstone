import React from 'react';
import Modal from '../../../../UI/modal';
import AddUserForm from './AddUserForm';

const AddUser = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <h1 className="text-center">Add Member</h1>
      <AddUserForm onClick={props.onClick} />
    </Modal>
  );
};

export default AddUser;
