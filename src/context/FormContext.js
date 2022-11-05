import React from "react";
import { createContext, useReducer } from "react";
import axios from "axios";

import { formPostReducer } from "../reducer/formPostReducer";
import { URL, FORM_POST_ERROR, FORM_POST_LOADING, FORM_POST_SUCCESS } from "../reducer/constant";

export const FormContext = createContext();
const FormContextProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(formPostReducer, { message: "", postLoading: true });

  const postMail = async (mailDetails) => {
    try {
      const response = await axios.post(`${URL}/sendEmail`, mailDetails);
      if (response.data.success) {
        dispatch({ type: FORM_POST_SUCCESS, payload: { message: response.data.message } });
      }
    } catch (error) {
      error.response.data
        ? dispatch({ type: FORM_POST_ERROR, payload: { message: error.response.data } })
        : dispatch({ type: FORM_POST_ERROR, payload: { message: "server error" } });
    }
  };
  const FormContextData = { postMail, postState };
  return <FormContext.Provider value={FormContextData}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
