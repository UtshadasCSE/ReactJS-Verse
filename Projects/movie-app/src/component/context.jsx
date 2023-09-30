import React, { useContext } from "react";
/* eslint-disable react-refresh/only-export-components */
// context <API></API>
// useContext Hooks
//context (WareHouse)
// provider
//consumer

// eslint-disable-next-line react-refresh/only-export-components
const AppContext = React.createContext();

// we need a create provider function
// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"Utsha"}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
