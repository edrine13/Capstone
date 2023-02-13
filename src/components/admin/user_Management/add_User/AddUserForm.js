import React, { useState } from "react";
import { addUser } from "../../../../store/api/api";

const inputIsNotEmpty = (input) => input !== "";
const phoneNumIsValid = (phone) => phone.trim().length === 11;

const AddUserForm = (props) => {
  // STATE FOR ALL INPUTS
  // CAN USE "REACT-HOOK-FORMS" later if we made it in time
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [nameSuffix, setNameSuffix] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const [civilStatus, setCivilStatus] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Check if the input is valid for user experience
  const [validInput, setValidInput] = useState({
    lastName: true,
    middleName: true,
    firstName: true,
    nameSuffix: true,
    contactNumber: true,
    email: true,
    civilStatus: true,
    birthDate: true,
    nationality: true,
    monthlyContribution: true,
    username: true,
    password: true,
  });

  // Last Name Input Handler
  const lastNameInputHandler = (event) => {
    setLastName(event.target.value);
  };

  //   Middle name input handler
  const middleNameInputHandler = (event) => {
    setMiddleName(event.target.value);
  };
  //   First Input Handler
  const firstNameInputHandler = (event) => {
    setFirstName(event.target.value);
  };
  //   Suffix name Input Handler
  const suffixInputHandler = (event) => {
    setNameSuffix(event.target.value);
  };
  //   Contact Number Handler
  const contactNumberHandler = (event) => {
    setContactNumber(event.target.value);
  };

  //   Email Input Handler
  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  //   Civil Status Handler
  const civilStatusInputHandler = (event) => {
    setCivilStatus(event.target.value);
  };

  //   Birthdate handler
  const birthdateHandler = (event) => {
    setBirthDate(event.target.value);
  };

  //   Nationality input Handler
  const nationalityHandler = (event) => {
    setNationality(event.target.value);
  };

  //   Monthly Contribution Input Handler
  const monthlyContriHandler = (event) => {
    setMonthlyContribution(event.target.value);
  };

  //   Username Input Handler
  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  //   Password Input Handler
  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  // Submit Handler
  const addUserHandler = (event) => {
    event.preventDefault();

    // setting all input a check
    const lastNameIsValid = inputIsNotEmpty(lastName);
    const middleNameIsValid = inputIsNotEmpty(middleName);
    const firstNameIsValid = inputIsNotEmpty(firstName);
    const nameSuffixIsValid = inputIsNotEmpty(nameSuffix);
    const contactIsValid = phoneNumIsValid(contactNumber);
    const emailIsValid = inputIsNotEmpty(email);
    const civilStatusIsValid = inputIsNotEmpty(civilStatus);
    const birthDateIsValid = inputIsNotEmpty(birthDate);
    const nationalityIsValid = inputIsNotEmpty(nationality);
    const monthlyContributionIsValid = inputIsNotEmpty(monthlyContribution);
    const userNameIsValid = inputIsNotEmpty(username);
    const passwordIsValid = inputIsNotEmpty(password);

    // OVERALL INPUT CHECK IF VALID

    const inputIsValid =
      lastNameIsValid &&
      middleNameIsValid &&
      firstNameIsValid &&
      nameSuffixIsValid &&
      contactIsValid &&
      emailIsValid &&
      civilStatusIsValid &&
      nationalityIsValid &&
      monthlyContributionIsValid &&
      userNameIsValid &&
      passwordIsValid;

    // Validation input again for user experience
    setValidInput({
      lastName: lastNameIsValid,
      middleName: middleNameIsValid,
      firstName: firstNameIsValid,
      nameSuffix: nameSuffixIsValid,
      contactNumber: contactIsValid,
      email: emailIsValid,
      civilStatus: civilStatusIsValid,
      birthDate: birthDateIsValid,
      nationality: nationalityIsValid,
      monthlyContribution: monthlyContributionIsValid,
      username: userNameIsValid,
      password: passwordIsValid,
    });

    if (!inputIsValid) {
      return;
    }
  };
  return (
    <form onSubmit={addUserHandler}>
      <div className="container">
        <div className="row">
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
                !validInput.lastName ? "is-invalid" : ""
              }`}
              placeholder="Last Name..."
              onChange={lastNameInputHandler}
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
                !validInput.middleName ? "is-invalid" : ""
              }`}
              placeholder="Middle Name.."
              onChange={middleNameInputHandler}
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
                !validInput.firstName ? "is-invalid" : ""
              }`}
              placeholder="First Name..."
              onChange={firstNameInputHandler}
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
              className={`form-control my-3 p-2 ${
                !validInput.nameSuffix ? "is-invalid" : ""
              }`}
              placeholder="Jr, Sr, etc..."
              onChange={suffixInputHandler}
            />
          </div>

          {/* Contact Number input */}

          <div className="col-4">
            <label htmlFor="contactNum" className="d-block">
              Contact Number
            </label>
            <input
              type="number"
              name="contactNum"
              id="contactNum"
              className={`form-control my-3 p-2 ${
                !validInput.contactNumber ? "is-invalid" : ""
              }`}
              placeholder="Contact Number"
              onChange={contactNumberHandler}
            />
          </div>
          {/* EMAIL INPUT */}
          <div className="col-4">
            <label htmlFor="email" className="d-block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control my-3 p-2 ${
                !validInput.email ? "is-invalid" : ""
              }`}
              placeholder="Email Address"
              onChange={emailInputHandler}
            />
          </div>

          {/* GENDER  */}
          <div className="col-4">
            <label htmlFor="gender" className="d-block">
              Gender
            </label>
            <select
              className="form-select my-3 p-2"
              aria-label="Default select example"
              id="gender"
              onChange={genderInputHandler}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Civil Status */}

          <div className="col-4">
            <label htmlFor="civilStatus" className="d-block">
              Civil Status
            </label>
            <input
              type="text"
              name="civilStatus"
              id="civilStatus"
              className={`form-control my-3 p-2 ${
                !validInput.civilStatus ? "is-invalid" : ""
              }`}
              placeholder="Civil Status"
              onChange={civilStatusInputHandler}
            />
          </div>

          {/* Date */}

          <div className="col-4">
            <label htmlFor="date" className="d-block">
              Birthdate
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className={`form-control my-3 p-2 ${
                !validInput.birthDate ? "is-invalid" : ""
              }`}
              onChange={birthdateHandler}
              format={"DD-MM-YYYY"}
            />
          </div>

          {/* NATIONALITY */}
          <div className="col-4">
            <label htmlFor="nationality" className="d-block">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              className={`form-control my-3 p-2 ${
                !validInput.nationality ? "is-invalid" : ""
              }`}
              placeholder="Nationality"
              onChange={nationalityHandler}
            />
          </div>

          {/* USERNAME*/}
          <div className="col-4">
            <label htmlFor="userName" className="d-block">
              Username
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              className={`form-control my-3 p-2 ${
                !validInput.username ? "is-invalid" : ""
              }`}
              placeholder="Password "
              onChange={usernameInputHandler}
            />
          </div>

          {/* PASSWORD */}
          <div className="col-4">
            <label htmlFor="password" className="d-block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control my-3 p-2 ${
                !validInput.password ? "is-invalid" : ""
              }`}
              placeholder="Password "
              onChange={passwordInputHandler}
            />
          </div>

          {/* MONTHLY CONTRIBUTION INPUT */}
          <div className="col-4">
            <label htmlFor="contribution" className="d-block text-center">
              Monthly Contribution
            </label>
            <input
              type="text"
              name="contribution"
              id="contribution"
              className={`form-control my-3 p-2  ${
                !validInput.monthlyContribution ? "is-invalid" : ""
              }`}
              placeholder="Amount..."
              onChange={monthlyContriHandler}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
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

export default AddUserForm;
