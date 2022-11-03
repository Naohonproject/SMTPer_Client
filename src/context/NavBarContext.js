import React from "react";
import { createContext, useState } from "react";
export const NavBarContext = createContext();

const NavBarContextProvider = ({ children }) => {
  const [isDropdownHide, setIsDropdownHide] = useState(false);
  const [showItemId, setShowItemId] = useState(0);
  const NavBarContextData = { isDropdownHide, setIsDropdownHide, showItemId, setShowItemId };
  return <NavBarContext.Provider value={NavBarContextData}>{children}</NavBarContext.Provider>;
};

export default NavBarContextProvider;
