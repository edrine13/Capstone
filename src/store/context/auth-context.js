import React, { useEffect, useState } from "react";

const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  role: "",
});
// Just a helper to calculate the timer
const timerHelper = (expiresIn) => {
  const latestDate = new Date().getTime();
  const timer = new Date(expiresIn).getTime();

  const timeExp = timer - latestDate;
  return timeExp;
};

// Function to check if the user has enough reasonable time to keep the account login

const tokenData = () => {
  const existingToken = localStorage.getItem("token");
  const existingTimer = localStorage.getItem("timer");

  const validTime = timerHelper(existingTimer);

  console.log(validTime);

  if (validTime <= 60000) {
    return null;
  }
  return { token: existingToken, time: validTime };
};

let timerGlobal = null;

export const AuthContextProvider = (props) => {
  const retrieveToken = tokenData();
  let localToken;
  if (retrieveToken) {
    localToken = localStorage.getItem("token");
  }

  const [token, setToken] = useState(localToken);
  const userIsloggedIn = !!token;
  console.log(!!token);

  //   LogoutHandler

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("timer");
    setToken(null);

    if (timerGlobal) {
      clearTimeout(timerGlobal);
    }
  };

  //Login Handler

  const loginHandler = (token, timer) => {
    localStorage.setItem("token", token);

    setToken(token);
    localStorage.setItem("timer", timer);

    const tokenTimer = timerHelper(timer);
    console.log(tokenTimer);

    timerGlobal = setTimeout(logoutHandler, tokenTimer);
  };

  useEffect(() => {
    if (retrieveToken) {
      timerGlobal = setTimeout(logoutHandler, retrieveToken.time);
    }
  }, [retrieveToken]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsloggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;