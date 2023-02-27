import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../../../UI/LoadingSpinner';
import { getAllUserPure, editData } from '../../../../store/api/api';

const inputIsNotEmpty = (value) => value.trim().length >= 1;

const DataEditorForm = (props) => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [suffix, setSuffix] = useState('');
  const [email, setEmail] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [accountStatus, setAccountStatus] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const response = async () => {
      const pureData = await getAllUserPure();
      setData(pureData);
    };
    response();
  }, [setData]);

  // ALL INPUT HANDLER

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const middleNameHandler = (event) => {
    setMiddleName(event.target.value);
  };

  const suffixHandler = (event) => {
    setSuffix(event.target.value);
  };

  const contactNumberHandler = (event) => {
    setContactNumber(event.target.value);
  };

  const nationalityHandler = (event) => {
    setNationality(event.target.value);
  };

  const civilStatusHandler = (event) => {
    setCivilStatus(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const monthlyContributionHandler = (event) => {
    setMonthlyContribution(event.target.value);
  };

  const accountStatusHandler = (event) => {
    setAccountStatus(event.target.value);
  };

  // FORM EDIT SUBMIT HANDLER -Function will run after clicking the submit button :3
  const formEditSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const userData = props.onSubmit();
    const lastNameIsValid = inputIsNotEmpty(lastName);
    const firstNameIsValid = inputIsNotEmpty(firstName);
    const middleNameIsValid = inputIsNotEmpty(middleName);
    const suffixIsValid = inputIsNotEmpty(suffix);
    const civilStatusIsValid = inputIsNotEmpty(civilStatus);
    const contactNumberIsValid = inputIsNotEmpty(contactNumber);
    const nationalityIsValid = inputIsNotEmpty(nationality);
    const emailIsValid = inputIsNotEmpty(email);
    const monthlyContributionIsValid = inputIsNotEmpty(monthlyContribution);
    const accountStatusIsValid = inputIsNotEmpty(accountStatus);
    let convertData = {};

    convertData = {
      ...data[userData.id],
      lastName: lastNameIsValid ? lastName : userData.lastName,
      firstName: firstNameIsValid ? firstName : userData.firstName,
      middleName: middleNameIsValid ? middleName : userData.middleName,
      suffix: suffixIsValid ? suffix : userData.suffix,
      civilStatus: civilStatusIsValid ? civilStatus : userData.civilStatus,
      contactNumber: contactNumberIsValid
        ? contactNumber
        : userData.contactNumber,
      nationality: nationalityIsValid ? nationality : userData.nationality,
      email: emailIsValid ? email : userData.email,
      monthlyContribution: monthlyContributionIsValid
        ? monthlyContribution
        : userData.monthlyContribution,
      accountStatus: accountStatusIsValid
        ? accountStatus
        : userData.accountStatus,
    };
    console.log(userData.id);

    editData(convertData, userData.id);
    setIsLoading(false);
    props.onClick();
  };

  return (
    <form onSubmit={formEditSubmitHandler}>
      <div className="container">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="row">
              <div className="col-4">
                <label>Last Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={`form-control my-3 p-2 `}
                  placeholder="First Name"
                  onChange={lastNameHandler}
                  value={lastName}
                />
              </div>
              <div className="col-4">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={`form-control my-3 p-2 `}
                  placeholder="First Name"
                  onChange={firstNameHandler}
                  value={firstName}
                />
              </div>
              <div className="col-4">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="Middle Name"
                  id="Middle Name"
                  className={`form-control my-3 p-2 `}
                  placeholder="Middle Name"
                  onChange={middleNameHandler}
                  value={middleName}
                />
              </div>
              <div className="col-4">
                <label>Suffix </label>
                <input
                  type="text"
                  name="suffix"
                  id="suffix"
                  className={`form-control my-3 p-2 `}
                  placeholder="suffix"
                  onChange={suffixHandler}
                  value={suffix}
                />
              </div>
              <div className="col-4">
                <label>Contact Number</label>
                <input
                  type="number"
                  name="contactNumber"
                  id="contactNumber"
                  className={`form-control my-3 p-2 `}
                  placeholder="Contact Number"
                  onChange={contactNumberHandler}
                  value={contactNumber}
                />
              </div>
              <div className="col-4">
                <label>Civil Status</label>
                <input
                  type="text"
                  name="civilStatus"
                  id="civilStatus"
                  className={`form-control my-3 p-2 `}
                  placeholder="Civil Status"
                  onChange={civilStatusHandler}
                  value={civilStatus}
                />
              </div>
              <div className="col-4">
                <label>Nationality</label>
                <input
                  type="text"
                  name="Nationality"
                  id="Nationality"
                  className={`form-control my-3 p-2 `}
                  placeholder="Nationality"
                  onChange={nationalityHandler}
                  value={nationality}
                />
              </div>
              <div className="col-4">
                <label>Email</label>
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  className={`form-control my-3 p-2 `}
                  placeholder="Email"
                  onChange={emailHandler}
                  value={email}
                />
              </div>
              <div className="col-4">
                <label>Monthly Contribution</label>
                <input
                  type="text"
                  name="monthlyContribution "
                  id="monthlyContribution"
                  className={`form-control my-3 p-2 `}
                  placeholder="Monthly Contribution"
                  onChange={monthlyContributionHandler}
                  value={monthlyContribution}
                />
              </div>
              <div className="col-4">
                <label>Account Status</label>
                <input
                  type="text"
                  name="accountStatus"
                  id="accountStatus"
                  className={`form-control my-3 p-2 `}
                  placeholder="Account Status"
                  onChange={accountStatusHandler}
                  value={accountStatus}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="submit"
                className={`btn btn-success ${false ? 'disabled' : ''}`}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={props.onClick}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default DataEditorForm;
