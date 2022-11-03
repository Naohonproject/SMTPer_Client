import { useState, useContext } from "react";
import { FiZap } from "react-icons/fi";

import style from "./style.module.css";
import { NavBarContext } from "../../../context/NavBarContext";

const NavDropDown = ({ id, dropDownItemList }) => {
  const { isDropdownHide, showItemId } = useContext(NavBarContext);
  const { icons, contents } = dropDownItemList;
  console.log(icons);
  console.log(contents);

  return (
    <div
      className={
        isDropdownHide && showItemId !== id
          ? style.dropdown
          : showItemId === id
          ? style.dropdownFlex + " " + style.dropdown + " " + "shadow-2xl bg-yellow-50"
          : style.dropdown
      }
    >
      {icons.map((icon, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              padding: "12px",
              alignItems: "center",
            }}
            key={index}
            className="hover:opacity-50"
          >
            {icon}{" "}
            <span style={{ marginLeft: "6px" }}>
              {contents[index] === "Postman" ? (
                <a href="https://www.postman.com/" target="_blank">
                  {contents[index]}
                </a>
              ) : (
                contents[index]
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NavDropDown;
