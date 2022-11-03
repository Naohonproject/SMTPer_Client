import React from "react";
import { createContext, useState } from "react";
export const NavBarContext = createContext();

const NavBarContextProvider = ({ children }) => {
  const [isDropdownHide, setIsDropdownHide] = useState(false);
  const [showItemId, setShowItemId] = useState(0);
  const [isMainFormShow, setIsMainFormShow] = useState(true);
  const [isMiniForm, setIsMiniForm] = useState(true);

  const NavBarContextData = {
    isDropdownHide,
    setIsDropdownHide,
    showItemId,
    setShowItemId,
    isMainFormShow,
    setIsMainFormShow,
    isMiniForm,
    setIsMiniForm,
  };
  return <NavBarContext.Provider value={NavBarContextData}>{children}</NavBarContext.Provider>;
};

export default NavBarContextProvider;
