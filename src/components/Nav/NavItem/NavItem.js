import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";

import style from "./style.module.css";
import { NavBarContext } from "../../../context/NavBarContext";

const NavItem = ({ content, first, dropDown, id }) => {
  const { setShowItemId } = useContext(NavBarContext);

  const handleOnClick = (e) => {
    e.stopPropagation();
    setShowItemId(id);
  };
  return (
    <div className={style.navItem}>
      <div onClick={handleOnClick} className={style.navAbove}>
        {first}
        {content}
        <BsChevronDown />
      </div>
      {dropDown}
    </div>
  );
};

export default NavItem;
