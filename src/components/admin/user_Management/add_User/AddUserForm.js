import React, { useState } from 'react';
import { addUser } from '../../../../store/api/api';
import LoadingSpinner from '../../../../UI/LoadingSpinner';

const inputIsNotEmpty = (input) => input !== '';
const contributionIsValid = (contribution) => contribution >= 200;
const phoneNumIsValid = (phone) => phone.trim().length === 11;

const AddUserForm = (props) => {
  // STATE FOR ALL INPUTS
  // CAN USE "REACT-HOOK-FORMS" later if we made it in time
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [nameSuffix, setNameSuffix] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [civilStatus, setCivilStatus] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [nationality, setNationality] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Member');

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
    lastName: true,
    middleName: true,
    firstName: true,
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

  // GENDER INPUT HANDLER
  const genderInputHandler = (event) => {
    setGender(event.target.value);
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
  const addUserHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // setting all input a check
    const lastNameIsValid = inputIsNotEmpty(lastName);
    const middleNameIsValid = inputIsNotEmpty(middleName);
    const firstNameIsValid = inputIsNotEmpty(firstName);

    const contactIsValid = phoneNumIsValid(contactNumber);
    const emailIsValid = inputIsNotEmpty(email);
    const civilStatusIsValid = inputIsNotEmpty(civilStatus);
    const birthDateIsValid = inputIsNotEmpty(birthDate);
    const nationalityIsValid = inputIsNotEmpty(nationality);
    const monthlyContributionIsValid = contributionIsValid(monthlyContribution);
    const userNameIsValid = inputIsNotEmpty(username);
    const passwordIsValid = inputIsNotEmpty(password);

    // OVERALL INPUT CHECK IF VALID

    const inputIsValid =
      lastNameIsValid &&
      middleNameIsValid &&
      firstNameIsValid &&
      contactIsValid &&
      emailIsValid &&
      civilStatusIsValid &&
      nationalityIsValid &&
      monthlyContributionIsValid &&
      userNameIsValid &&
      passwordIsValid;

    setInputIsValid(inputIsValid);

    // Validation input again for user experience
    setValidInput({
      lastName: lastNameIsValid,
      middleName: middleNameIsValid,
      firstName: firstNameIsValid,

      contactNumber: contactIsValid,
      email: emailIsValid,
      civilStatus: civilStatusIsValid,
      birthDate: birthDateIsValid,
      nationality: nationalityIsValid,
      monthlyContribution: monthlyContributionIsValid,
      username: userNameIsValid,
      password: passwordIsValid,
      loanStatus: 'inactive',
      accountStatus: 'active',
      totalContribution: monthlyContribution,
      monthlyLoanPayment: 0,
      contributionCount: 0,
      lastPaid:
        new Date().getFullYear() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getDate(),
    });

    if (!inputIsValid) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await addUser({
        lastName,
        middleName,
        firstName,
        nameSuffix,
        contactNumber,
        email,
        gender,
        civilStatus,
        birthDate,
        nationality,
        monthlyContribution,
        username,
        password,
        role,
        accountStatus: 'active',
        monthlyLoanPayment: 0,
        loanStatus: 'inactive',
        totalContribution: monthlyContribution,
        contributionCount: 1,
        lastPaid:
          new Date().getFullYear() +
          '/' +
          (new Date().getMonth() + 1) +
          '/' +
          new Date().getDate(),
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

    setFirstName('');
    setLastName('');
    setMiddleName('');
    setContactNumber('');
    setEmail('');

    setGender('Male');
    setCivilStatus('');
    setBirthDate('');
    setNationality('');
    setNationality('');
    setPassword('');
    setUsername('');
    setRole('Member');
    setMonthlyContribution('');
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <form onSubmit={addUserHandler}>
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

            {/* Contact Number input */}

            <div className="col-4">
              <label htmlFor="contactNum" className="d-block">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNum"
                id="contactNum"
                className={`form-control my-3 p-2 ${
                  !validInput.contactNumber ? 'is-invalid' : ''
                }`}
                placeholder="Contact Number"
                onChange={contactNumberHandler}
                value={contactNumber}
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
                  !validInput.email ? 'is-invalid' : ''
                }`}
                placeholder="Email Address"
                onChange={emailInputHandler}
                value={email}
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
                value={gender}
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
                  !validInput.civilStatus ? 'is-invalid' : ''
                }`}
                placeholder="Civil Status"
                onChange={civilStatusInputHandler}
                value={civilStatus}
              />
            </div>

            {/* Birthdate */}

            <div className="col-4">
              <label htmlFor="date" className="d-block">
                Birthdate
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className={`form-control my-3 p-2 ${
                  !validInput.birthDate ? 'is-invalid' : ''
                }`}
                onChange={birthdateHandler}
                format={'DD-MM-YYYY'}
                value={birthDate}
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
                  !validInput.nationality ? 'is-invalid' : ''
                }`}
                placeholder="Nationality"
                onChange={nationalityHandler}
                value={nationality}
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
                  !validInput.username ? 'is-invalid' : ''
                }`}
                placeholder="Username"
                onChange={usernameInputHandler}
                value={username}
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
                  !validInput.password ? 'is-invalid' : ''
                }`}
                placeholder="Password "
                onChange={passwordInputHandler}
                value={password}
              />
            </div>
            {/* ROLE INPUT */}
            <div className="col-4">
              <label htmlFor="role" className="d-block">
                Role
              </label>
              <select
                className="form-select my-3 p-2"
                aria-label="Default select example"
                id="role"
                onChange={genderInputHandler}
                value={role}
              >
                <option value="Member">Member</option>
              </select>
            </div>

            {/* MONTHLY CONTRIBUTION INPUT */}
            <div className="col-4">
              <label htmlFor="contribution" className="d-block text-center">
                Monthly Contribution
              </label>
              <input
                type="number"
                name="contribution"
                id="contribution"
                className={`form-control my-3 p-2  ${
                  !validInput.monthlyContribution ? 'is-invalid' : ''
                }`}
                placeholder="Amount..."
                onChange={monthlyContriHandler}
                value={monthlyContribution}
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

export default AddUserForm;
