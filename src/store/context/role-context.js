import React, { useState } from "react";

const roleContext = React.createContext({
  role: "",
});

export default roleContext;

export const RoleContextProvider = (props) => {
  const [role, setRole] = useState("");

  // Check if account is in database with the defined role
  const roleChecker = (userRole) => {
    setRole(userRole);
  };

  const value = {
    roleChecker,
    role,
  };
  return (
    <roleContext.Provider value={value}>{props.children}</roleContext.Provider>
  );
};
