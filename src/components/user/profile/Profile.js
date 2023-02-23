import React, { useContext, useEffect, useState, useMemo } from 'react';
import userContext from '../../../store/context/users-context';
import { getAllUser } from '../../../store/api/api';

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const userCtx = useContext(userContext).userData;

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getAllUser();
      setUsers(data);
      setFilteredData(data);
    };

    fetchUsers();
  }, [setUsers, getAllUser]);

  const currentUser = useMemo(
    () =>
      users.filter((row) => row.email.toLowerCase().includes(userCtx.email)),
    [users, userCtx.email]
  );

  console.log(currentUser);

  return (
    <div className="mt-5 container">
      <h1 className="text-center">PROFILE</h1>
      <h4 className="mt-5">Basic Info</h4>

      {currentUser.map((user, index) => {
        return (
          <div className="d-flex row" key={index}>
            <label className="mt-2">
              <b>Last Name:</b> {user.lastName}
            </label>

            <label className="mt-2">
              <b>First Name:</b> {user.firstName}
            </label>

            <label className="mt-2">
              <b>Middle Name:</b> {user.middleName}
            </label>

            <label className="mt-2">
              <b>Suffix:</b> {user.nameSuffix ? user.nameSuffix : 'N/A'}
            </label>

            <label className="mt-2">
              <b>Birth Date:</b> {user.birthDate}
            </label>
          </div>
        );
      })}

      <h4 className="mt-5">Contact Info</h4>
      {currentUser.map((user, index) => {
        return (
          <div className="d-flex row" key={index}>
            <label className="mt-2">
              <b>Contact No.:</b> {user.contactNumber}
            </label>
            <label className="mt-2">
              <b>Email:</b> {user.email}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
