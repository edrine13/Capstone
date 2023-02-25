import React from 'react';
import Modal from '../../../UI/modal';
import LoadingSpinner from '../../../UI/LoadingSpinner';

const AreYouSureModal = (props) => {
  return (
    <Modal onClick={props.onClick}>
      {props.isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1>Are you sure you want to Collect Contribution?</h1>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-danger me-2 m-auto"
              onClick={props.yesHandler}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-success m-auto"
              onClick={props.onClick}
            >
              No
            </button>
          </div>
        </>
      )}
    </Modal>
  );
};

export default AreYouSureModal;
