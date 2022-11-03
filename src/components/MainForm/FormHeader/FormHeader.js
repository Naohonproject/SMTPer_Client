import { IoCloseOutline } from "react-icons/io5";
import { CiMaximize1, CiMinimize1 } from "react-icons/ci";

import "./FormHeader.css";

import NavBarBrand from "../../Nav/NavbarBrand/NavbarBrand";

const FormHeader = () => {
  return (
    <div className="bg-custom p-3">
      <div className="h-[31px] flex content-between item-center w-full">
        <NavBarBrand className="p-1" />
        <div className="flex content-center items-center ml-auto">
          <CiMaximize1 className="mr-3 text-xl hover:cursor-pointer " />
          <CiMinimize1 className="mr-3 text-xl hover:cursor-pointer " />
          <IoCloseOutline className="text-xl hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
