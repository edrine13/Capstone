import React from 'react';

const Profile = () => {
  return (
    <div className="mt-5 container">
      <h1 className="text-center">PROFILE</h1>
      <h4 className="mt-5">Basic Info</h4>
      <div className="d-flex row">
        <label className="mt-2">Last Name:</label>
        <label className="mt-2">First Name:</label>
        <label className="mt-2">Middle Name:</label>
        <label className="mt-2">Suffix:</label>
        <label className="mt-2">Birth Date:</label>
      </div>
      <h4 className="mt-5">Contact Info</h4>
      <div className="d-flex row">
        <label className="mt-2">Address:</label>
        <label className="mt-2">Contact No.:</label>
        <label className="mt-2">Email:</label>
      </div>
    </div>
  );
};

export default Profile;
