import React, { useState } from 'react';

const userContext = React.createContext({
  userHandler: (data) => {},
  userData: [],
  loanHandler: (id) => {},
  userLoanData: '',
});

export default userContext;
const name = localStorage.getItem('name');

export const UserContextProvider = (props) => {
  let savedName = '';

  if (name) {
    savedName = JSON.parse(name);
    console.log(name);
  }

  // LOGGED IN USER DATA
  const [userData, setUserData] = useState(savedName);

  // SELECTED USER DATA FROM LOAN COLLECTING DATA
  const [userLoanData, setUserLoanData] = useState('');

  console.log(savedName);

  const userHandler = (data) => {
    const convertedData = JSON.stringify(data);
    localStorage.setItem('name', convertedData);
    console.log(data);
    setUserData(data);
  };

  const loanHandler = (id) => {
    setUserLoanData(id);
  };
  console.log(userData);

  const value = {
    userHandler,
    userData,
    loanHandler,
    userLoanData,
  };
  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
};
