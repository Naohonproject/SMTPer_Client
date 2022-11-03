import { AiOutlineWindows } from "react-icons/ai";
import style from "./style.module.css";

const NavBarBrand = ({ p }) => {
  return (
    <div style={{ padding: p }} className={style.navBarBrand}>
      <AiOutlineWindows /> <span style={{ marginLeft: "6px" }}>SMTPer</span>
    </div>
  );
};

export default NavBarBrand;
