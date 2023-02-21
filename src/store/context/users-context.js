import React, { useState } from 'react';

const memberContext = React.createContext({
  user: {},
});

export default roleContext;

export const MemberContextProvider = (props) => {
  const [role, setRole] = useState('');

  const value = {};
  return (
    <memberContext.Provider value={value}>
      {props.children}
    </memberContext.Provider>
  );
};
