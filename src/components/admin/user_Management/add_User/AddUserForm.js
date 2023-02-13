import React, { useState } from "react";

const AddUserForm = (props) => {
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [nameSuffix, setNameSuffix] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationality, setNationality] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");

  const middleNameInputHandler = (event) => {};

  // Last Name Input Handler
  const lastNameInputHandler = (event) => {
    setLastName(event.target.value);
  };

  // Submit Handler
  const addUserHandler = (event) => {
    event.preventDefault();
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2"
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

          {/* Date */}

          <div className="col-4">
            <label htmlFor="date" className="d-block">
              Birthdate
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="form-control my-3 p-2"
              onChange={birthdateHandler}
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2"
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
              className="form-control my-3 p-2 ms-2"
              placeholder="Amount..."
              onChange={null}
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
