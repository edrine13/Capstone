import React, { useEffect, useState, useCallback } from 'react';
import { addLoan, getAllUser } from '../../../../store/api/api';
import LoadingSpinner from '../../../../UI/LoadingSpinner';

const inputIsNotEmpty = (input) => input !== '';
const validAmount = (input) => input !== '' && input >= 300;
const validPayableIn = (input) => input !== '' && input > 0;

const AddLoanType = (props) => {
  // STATE FOR ALL INPUTS
  // CAN USE "REACT-HOOK-FORMS" later if we made it in time
  const [users, setUsers] = useState([]);
  const [member, setMember] = useState(null);

  const [memberID, setMemberID] = useState('');
  const [loanType, setLoanType] = useState('shortTerm');
  const [loanAmount, setLoanAmount] = useState('');
  const [payableIn, setPayableIn] = useState('');
  const [monthlyLoanPayment, setMonthlyLoanPayment] = useState('');
  const [date, setDate] = useState('');
  const [userExists, setUserExists] = useState(false);
  console.log(member);
  console.log(memberID);
  console.log(users);

  useEffect(() => {
    const response = async () => {
      const data = await getAllUser();
      setUsers(data);
    };
    response();
  }, [setUsers]);

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

  // FIND IF MEMBER HAVE THE EXACT ID

  // Member ID Input Handler
  const memberIDInputHandler = (event) => {
    setMemberID(event.target.value);
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

  // CHECK IF USER IS VALID
  const checkIfValid = () => {
    const userExists = users.findIndex((user) => user.id === memberID);

    setMember(users[userExists]);
    if (userExists >= 0) {
      setUserExists(true);
    } else {
      setUserExists(false);
    }
  };

  // Submit Handler /////////////////////////////////////////////////////

  const approvedLoanHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // setting all input a check
    const memberIDIsValid = inputIsNotEmpty(memberID);

    const loanTypeIsValid = inputIsNotEmpty(loanType);
    const loanAmountIsValid = validAmount(loanAmount);
    const payableInIsValid = validPayableIn(payableIn);
    const monthlyLoanPaymentIsValid = validAmount(monthlyLoanPayment);
    const dateIsValid = inputIsNotEmpty(date);

    // OVERALL INPUT CHECK IF VALID

    const inputIsValid =
      memberIDIsValid &&
      loanTypeIsValid &&
      loanAmountIsValid &&
      payableInIsValid &&
      monthlyLoanPaymentIsValid &&
      dateIsValid &&
      userExists;

    setInputIsValid(inputIsValid);

    // Validation input again for user experience
    setValidInput({
      memberID: memberIDIsValid,

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
      addLoan({
        id: memberID,
        loanType,
        loanAmount,
        payableIn,
        monthlyLoanPayment,
        date,
        balance: loanAmount,
        loanStatus: 'active',
        paidAmount: 0,
      });
    } catch (err) {
      setIsLoading(false);
      setIsError(err);

      return;
    }

    setIsLoading(false);

    setMemberID('');

    setLoanType('');
    setLoanAmount('');
    setPayableIn('');
    setMonthlyLoanPayment('');
    setDate('');
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  console.log(userExists);

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
          <>
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
                  } ${userExists ? 'is-valid' : ''}`}
                  placeholder="Loan ID"
                  onChange={memberIDInputHandler}
                  value={memberID}
                />
                <button
                  type="button"
                  onClick={checkIfValid}
                  className="btn btn-success"
                >
                  Check User
                </button>
              </div>
              {/* Last Name Input */}
              <div className="col-4">
                <label>Last Name</label>
                <h4>{member ? member.lastName : 'No member Found'}</h4>
              </div>

              {/* Middle Name input */}
              <div className="col-4">
                <label>Middle Name </label>
                <label>(Blank if none)</label>
                <h4>{member ? member.middleName : 'No member Found'}</h4>
              </div>

              {/* First Name input */}
              <div className="col-4">
                <label>First Name</label>
                <h4>{member ? member.firstName : 'No member Found'}</h4>
              </div>

              {/* Suffix Input */}
              <div className="col-4">
                <label>Suffix (Blank if none)</label>
                <h4>{member ? member.suffix : 'No member Found'}</h4>
              </div>

              {/* Loan Type input */}
              <div className="col-4">
                <label htmlFor="loanType" className="d-block mb-1">
                  Loan Type
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={loanTypeInputHandler}
                  value={loanType}
                >
                  <option selected value="shortTerm">
                    Short Term
                  </option>
                  <option value="longTerm">Long Term</option>
                  <option value="EmergencyLoan">Emergency Loan</option>
                </select>
              </div>

              {/* Loan Amount input */}
              <div className="col-4">
                <label htmlFor="loanAmount" className="d-block">
                  Loan Amount
                </label>
                <input
                  type="number"
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
                  type="number"
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
                  type="number"
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
          </>
        )}
      </div>
    </form>
  );
};

export default AddLoanType;
