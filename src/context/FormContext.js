import React from "react";
import { createContext } from "react";

const FormContext = createContext();
const FormContextProvider = ({ children }) => {
  const FormContextData = {};
  return <FormContext.Provider value={FormContextData}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
