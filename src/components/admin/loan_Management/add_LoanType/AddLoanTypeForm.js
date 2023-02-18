import React, { useState } from 'react';
import { addLoanType } from '../../../../store/api/api';
import LoadingSpinner from '../../../../UI/LoadingSpinner';

const inputIsNotEmpty = (input) => input !== '';

const AddLoanType = (props) => {
  // STATE FOR ALL INPUTS
  // CAN USE "REACT-HOOK-FORMS" later if we made it in time
  const [loanID, setLoanID] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [payableIn, setPayableIn] = useState('');
  const [description, setDescription] = useState('');

  // API ERROR CHECKER
  const [isError, setIsError] = useState('');

  // CHECK IF INPUT IS VALID
  const [inputIsValid, setInputIsValid] = useState(false);

  // CHECK STATE IF IT'S LOADING
  const [isLoading, setIsLoading] = useState(false);

  // CHECK STATE IF SUBMITED
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check if the input is valid for user experience
  const [validInput, setValidInput] = useState({
    loanID: true,
    loanType: true,
    loanAmount: true,
    payableIn: true,
    description: true,
  });

  // Loan ID Input Handler
  const loanIDInputHandler = (event) => {
    setLoanID(event.target.value);
  };

  // Loan Type Input Handler
  const loanTypeInputHandler = (event) => {
    setLoanType(event.target.value);
  };

  //   Loan Amount input handler
  const loanAmountInputHandler = (event) => {
    setLoanAmount(event.target.value);
  };
  //   Payable In Handler
  const payableInInputHandler = (event) => {
    setPayableIn(event.target.value);
  };
  //   Description Input Handler
  const descriptionInputHandler = (event) => {
    setDescription(event.target.value);
  };

  // Submit Handler
  const addLoanTypeHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // setting all input a check
    const loanIDIsValid = inputIsNotEmpty(loanID);
    const loanTypeIsValid = inputIsNotEmpty(loanType);
    const loanAmountIsValid = inputIsNotEmpty(loanAmount);
    const payableInIsValid = inputIsNotEmpty(payableIn);
    const descriptionIsValid = inputIsNotEmpty(description);

    // OVERALL INPUT CHECK IF VALID

    const inputIsValid =
      loanIDIsValid &&
      loanTypeIsValid &&
      loanAmountIsValid &&
      payableInIsValid &&
      descriptionIsValid;

    setInputIsValid(inputIsValid);

    // Validation input again for user experience
    setValidInput({
      loanID: loanIDIsValid,
      loanType: loanTypeIsValid,
      loanAmount: loanAmountIsValid,
      payableIn: payableInIsValid,
      description: descriptionIsValid,
    });

    if (!inputIsValid) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await addLoanType({
        loanID,
        loanType,
        loanAmount,
        payableIn,
        description,
      });

      setIsSubmitted(true);

      if (response) {
        throw new Error(response.message);
      }
    } catch (err) {
      setIsLoading(false);
      setIsError(err);

      return;
    }

    setIsLoading(false);

    setLoanID('');
    setLoanType('');
    setLoanAmount('');
    setPayableIn('');
    setDescription('');

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form onSubmit={addLoanTypeHandler}>
      <div className="container">
        {isSubmitted ? (
          <div className="alert alert-success text-center" role="alert">
            Form is submitted successfully!
          </div>
        ) : null}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="row">
            {/* Loan ID Input */}
            <div className="col-4">
              <label htmlFor="loanID" className="d-block">
                Loan ID
              </label>

              <input
                type="text"
                name="loanID"
                id="loanID"
                className={`form-control my-3 p-2 ${
                  !validInput.loanID ? 'is-invalid' : ''
                }`}
                placeholder="Loan ID"
                onChange={loanIDInputHandler}
                value={loanID}
              />
            </div>

            {/* Loan Type input */}
            <div className="col-4">
              <label htmlFor="loanType" className="d-block">
                Loan Type
              </label>
              <input
                type="text"
                name="loanType"
                id="loanType"
                className={`form-control my-3 p-2 ${
                  !validInput.loanType ? 'is-invalid' : ''
                }`}
                placeholder="Loan Type"
                onChange={loanTypeInputHandler}
                value={loanType}
              />
            </div>

            {/* Loan Amount input */}
            <div className="col-4">
              <label htmlFor="loanAmount" className="d-block">
                Loan Amount
              </label>
              <input
                type="text"
                name="loanAmount"
                id="loanAmount"
                className={`form-control my-3 p-2 ${
                  !validInput.loanAmount ? 'is-invalid' : ''
                }`}
                placeholder="Loan Amount"
                onChange={loanAmountInputHandler}
                value={loanAmount}
              />
            </div>

            {/* Payable In input */}
            <div className="col-4">
              <label htmlFor="payableIn" className="d-block">
                Payable In
              </label>
              <input
                type="text"
                name="payableIn"
                id="payableIn"
                className={`form-control my-3 p-2 ${
                  !validInput.payableIn ? 'is-invalid' : ''
                }`}
                placeholder="Payable In"
                onChange={payableInInputHandler}
                value={payableIn}
              />
            </div>

            {/* Description In input */}
            <div className="col-4">
              <label htmlFor="description" className="d-block">
                Description
              </label>
              <input
                type="textarea"
                name="description"
                id="description"
                className={`form-control my-3 p-2 ${
                  !validInput.description ? 'is-invalid' : ''
                }`}
                placeholder="Description"
                onChange={descriptionInputHandler}
                value={description}
              />
            </div>
          </div>
        )}
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className={`btn btn-success ${isLoading ? 'disabled' : ''}`}
          >
            Add
          </button>
          <button className="btn btn-danger ms-2" onClick={props.onClick}>
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddLoanType;
