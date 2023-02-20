import React, { useState } from 'react';
import { addLoan } from '../../../../store/api/api';
import LoadingSpinner from '../../../../UI/LoadingSpinner';

const inputIsNotEmpty = (input) => input !== '';

const AddLoanType = (props) => {
  // STATE FOR ALL INPUTS
  // CAN USE "REACT-HOOK-FORMS" later if we made it in time
  const [memberID, setMemberID] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [nameSuffix, setNameSuffix] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [payableIn, setPayableIn] = useState('');
  const [monthlyLoanPayment, setMonthlyLoanPayment] = useState('');
  const [date, setDate] = useState('');

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
    memberID: true,
    lastName: true,
    middleName: true,
    firstName: true,
    loanType: true,
    loanAmount: true,
    payableIn: true,
    monthlyLoanPayment: true,
    date: true,
  });

  // Member ID Input Handler
  const memberIDInputHandler = (event) => {
    setMemberID(event.target.value);
  };

  // Last Name Input Handler
  const lastNameInputHandler = (event) => {
    setLastName(event.target.value);
  };

  //   Middle Name input handler
  const middleNameInputHandler = (event) => {
    setMiddleName(event.target.value);
  };
  //   First Name Input Handler
  const firstNameInputHandler = (event) => {
    setFirstName(event.target.value);
  };
  //   Suffix Input Handler
  const suffixInputHandler = (event) => {
    setNameSuffix(event.target.value);
  };
  //   Loan Type Input Handler
  const loanTypeInputHandler = (event) => {
    setLoanType(event.target.value);
  };
  //   Loan Amount Input Handler
  const loanAmountInputHandler = (event) => {
    setLoanAmount(event.target.value);
  };
  //   Payable In Input Handler
  const payableInInputHandler = (event) => {
    setPayableIn(event.target.value);
  };
  //   Monthly Loan Payment Input Handler
  const monthlyLoanPaymentInputHandler = (event) => {
    setMonthlyLoanPayment(event.target.value);
  };
  //   Date Input Handler
  const dateInputHandler = (event) => {
    setDate(event.target.value);
  };
  // Submit Handler
  const approvedLoanHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // setting all input a check
    const memberIDIsValid = inputIsNotEmpty(memberID);
    const lastNameIsValid = inputIsNotEmpty(lastName);
    const firstNameIsValid = inputIsNotEmpty(firstName);
    const middleNameIsValid = inputIsNotEmpty(middleName);
    const loanTypeIsValid = inputIsNotEmpty(loanType);
    const loanAmountIsValid = inputIsNotEmpty(loanAmount);
    const payableInIsValid = inputIsNotEmpty(payableIn);
    const monthlyLoanPaymentIsValid = inputIsNotEmpty(monthlyLoanPayment);
    const dateIsValid = inputIsNotEmpty(date);

    // OVERALL INPUT CHECK IF VALID

    const inputIsValid =
      memberIDIsValid &&
      lastNameIsValid &&
      firstNameIsValid &&
      middleNameIsValid &&
      loanTypeIsValid &&
      loanAmountIsValid &&
      payableInIsValid &&
      monthlyLoanPaymentIsValid &&
      dateIsValid;

    setInputIsValid(inputIsValid);

    // Validation input again for user experience
    setValidInput({
      memberID: memberIDIsValid,
      lastName: lastNameIsValid,
      firstName: firstNameIsValid,
      middleName: middleNameIsValid,
      loanType: loanTypeIsValid,
      loanAmount: loanAmountIsValid,
      payableIn: payableInIsValid,
      monthlyLoanPayment: monthlyLoanPaymentIsValid,
      date: dateIsValid,
    });

    if (!inputIsValid) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await addLoan({
        memberID,
        lastName,
        firstName,
        middleName,
        nameSuffix,
        loanType,
        loanAmount,
        payableIn,
        monthlyLoanPayment,
        date,
        balance: loanAmount,
        paidAmount: 0,
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

    setMemberID('');
    setLastName('');
    setFirstName('');
    setMiddleName('');
    setLoanType('');
    setLoanAmount('');
    setPayableIn('');
    setMonthlyLoanPayment('');
    setDate('');
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form onSubmit={approvedLoanHandler}>
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
            {/* Member ID Input */}
            <div className="col-4">
              <label htmlFor="memberID" className="d-block">
                Member ID
              </label>

              <input
                type="text"
                name="memberID"
                id="memberID"
                className={`form-control my-3 p-2 ${
                  !validInput.memberID ? 'is-invalid' : ''
                }`}
                placeholder="Loan ID"
                onChange={memberIDInputHandler}
                value={memberID}
              />
            </div>
            {/* Last Name Input */}
            <div className="col-4">
              <label htmlFor="lastName" className="d-block">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                id="lastName"
                className={`form-control my-3 p-2 ${
                  !validInput.lastName ? 'is-invalid' : ''
                }`}
                placeholder="Last Name..."
                onChange={lastNameInputHandler}
                value={lastName}
              />
            </div>

            {/* Middle Name input */}
            <div className="col-4">
              <label htmlFor="middleName" className="d-block">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                id="middleName"
                className={`form-control my-3 p-2 ${
                  !validInput.middleName ? 'is-invalid' : ''
                }`}
                placeholder="Middle Name.."
                onChange={middleNameInputHandler}
                value={middleName}
              />
            </div>

            {/* First Name input */}
            <div className="col-4">
              <label htmlFor="firstName" className="d-block">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className={`form-control my-3 p-2 ${
                  !validInput.firstName ? 'is-invalid' : ''
                }`}
                placeholder="First Name..."
                onChange={firstNameInputHandler}
                value={firstName}
              />
            </div>

            {/* Suffix Input */}
            <div className="col-4">
              <label htmlFor="suffix" className="d-block">
                Suffix (Optional)
              </label>
              <input
                type="text"
                name="suffix"
                id="suffix"
                className={`form-control my-3 p-2 `}
                placeholder="Jr, Sr, etc..."
                onChange={suffixInputHandler}
                value={nameSuffix}
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

            {/* Monthly Loan Payment In input */}
            <div className="col-4">
              <label htmlFor="monthlyLoanPayment" className="d-block">
                Monthly Loan Payment
              </label>
              <input
                type="text"
                name="monthlyLoanPayment"
                id="monthlyLoanPayment"
                className={`form-control my-3 p-2 ${
                  !validInput.monthlyLoanPayment ? 'is-invalid' : ''
                }`}
                placeholder="Monthly Loan Payment"
                onChange={monthlyLoanPaymentInputHandler}
                value={monthlyLoanPayment}
              />
            </div>
            {/* Date */}

            <div className="col-4">
              <label htmlFor="date" className="d-block">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className={`form-control my-3 p-2 ${
                  !validInput.date ? 'is-invalid' : ''
                }`}
                onChange={dateInputHandler}
                format={'DD-MM-YYYY'}
                value={date}
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
