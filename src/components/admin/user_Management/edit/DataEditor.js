import React from 'react';
import Modal from '../../../../UI/modal';
import DataEditorForm from './DataEditorForm';

const DataEditor = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <h1 className="text-center">Edit Member</h1>
      <DataEditorForm onClick={props.onClick} />
    </Modal>
  );
};

export default DataEditor;
