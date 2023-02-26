import React, { useState } from 'react';
import { updatedData } from '../../../../store/api/api';

const EditUser = ({ user, onEdit }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [middleName, setMiddleName] = useState(user.middleName);
  const [civilStatus, setCivilStatus] = useState(user.civilStatus);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [monthlyContribution, setMonthlyContribution] = useState(
    user.monthlyContribution
  );
  const [accountStatus, setAccountStatus] = useState(user.accountStatus);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedUser = {
      ...user,
      firstName,
      lastName,
      middleName,
      civilStatus,
      gender,
      email,
      monthlyContribution,
      accountStatus,
    };
    const response = await updatedData(updatedUser);
    onEdit(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Middle Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Civil Status"
            value={civilStatus}
            onChange={(e) => setCivilStatus(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditUser;
