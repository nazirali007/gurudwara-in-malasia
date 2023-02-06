import React, { createContext, useState } from "react";
export const UserDataContext = createContext({
  updateAdminData: () => {},
});

const UserContext = (props) => {
  const [adminData, setAdminData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateAdminData = (data) => {
    setAdminData(data);
  };
  return (
    <UserDataContext.Provider value={{ updateAdminData, adminData ,isAuthenticated, setIsAuthenticated}}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
