import React, { useState } from 'react';

const userContext = React.createContext({
  userHandler: (data) => {},
  userData: [],
});

export default userContext;
const name = localStorage.getItem('name');

export const UserContextProvider = (props) => {
  let savedName = '';

  if (name) {
    savedName = JSON.parse(name);
    console.log(name);
  }

  const [userData, setUserData] = useState(savedName);

  console.log(savedName);

  const userHandler = (data) => {
    const convertedData = JSON.stringify(data);
    localStorage.setItem('name', convertedData);
    console.log(data);
    setUserData(data);
  };
  console.log(userData);

  const value = {
    userHandler,
    userData,
  };
  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
};
