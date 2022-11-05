import { FiSend } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";

import { NavBarContext } from "../../../context/NavBarContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { FormContext } from "../../../context/FormContext";

import "./FormBody.css";

const FormBody = () => {
  const { isMiniForm } = useContext(NavBarContext);
  const { theme } = useContext(ThemeContext);
  const { postMail } = useContext(FormContext);

  const [isUseAuthentication, setIsUseAuthentication] = useState(false);
  const [isExtendMenu, setIsExtendMenu] = useState(false);
  const [mailDetails, setMailDetails] = useState({
    Host: "",
    Port: 25,
    Email: "",
    Password: "",
    From: "",
    To: "",
  });

  // console.log(mailDetails);

  const { Host, Port, Email, Password, From, To } = mailDetails;
  const [isSecurity, setIsSecurity] = useState(true);

  const handleOnChangeInput = (event) => {
    setMailDetails({ ...mailDetails, [event.target.name]: event.target.value });
  };

  const handleOnclick = () => {
    setIsExtendMenu((prev) => !prev);
  };

  return (
    <div
      className={
        "grid grid-cols-12 md:grid-cols-4 h-max relative" +
        " " +
        (isMiniForm ? " " : "-mt-[4px] toBottom")
      }
    >
      <div
        className={
          "md:col-span-1 col-span-1 bg-gray-300" + " " + (theme === "dark" ? "!bg-zinc-600" : " ")
        }
      >
        <div
          className={
            "fixed z-[1000000] w-[220px] h-[570px] bg-trans md:hidden" +
            " " +
            (isExtendMenu ? "block" : "hidden")
          }
        >
          {" "}
          <div className="h-[40px] flex items-center">
            <AiOutlineMenu onClick={handleOnclick} className="ml-auto mr-3 cursor-pointer" />
          </div>
          <div className="bg-slate-800  h-[42px] flex items-center content-between px-3 text-white ">
            <p>Test & Check</p>
            <FiSend className="ml-auto mr-1" />
          </div>
        </div>
        <div
          className={
            "flex md:flex-row flex-col items-center justify-between md:justify-start h-20 md:h-10 pb-3 p-1 md:p-3  md:bg-gray-700 text-white" +
            " " +
            (theme === "dark" ? "!bg-zinc-800" : " ")
          }
        >
          <AiOutlineMenu
            onClick={handleOnclick}
            className={
              "md:hidden text-center h-10 text-white cursor-pointer hover:opacity-80" +
              " " +
              (isExtendMenu ? "hidden" : "block")
            }
          />
          <span className="hidden md:block">Test & Check</span>
          <FiSend
            className={
              "text-center md:ml-auto text-white  sm:text-white hover:opacity-80 cursor-pointer" +
              " " +
              (isExtendMenu ? "hidden" : "block")
            }
          />
        </div>
      </div>
      <div
        className={
          "bg-yellow-50 p-3 col-span-11 md:col-span-3  grid grid-cols-1 lg:grid-cols-2 gap-1 border-t-2 border-l-2 border-l-gray-300 border-t-gray-300" +
          " " +
          (theme === "dark" ? "!bg-zinc-600" : " ")
        }
      >
        <div>
          <div className="col-span-1 p-3">
            <label for="host" className="text-red-600">
              SMTP host
            </label>
            <input
              onChange={handleOnChangeInput}
              value={Host}
              name="Host"
              placeholder="required"
              type="text"
              id="host"
              className={
                "border-b-2 w-full border-gray-400 bg-yellow-50" +
                " " +
                (theme === "dark" ? "bg-zinc-600" : "")
              }
              required
            />
          </div>
          <div className="col-span-1 p-3">
            <label for="host" className={theme === "dark" ? "text-white" : "text-gray-600"}>
              Port
            </label>
            <input
              onChange={handleOnChangeInput}
              value={Port}
              name="Port"
              placeholder="required"
              type="text"
              id="host"
              className={
                "border-b-2 w-full border-gray-400 bg-yellow-50" +
                " " +
                (theme === "dark" ? "bg-zinc-600 text-white" : "text-gray-500")
              }
              required
            />
          </div>
          <div className="col-span-1 px-3 py-5 flex items-center content-around">
            <input
              checked={isSecurity}
              onClick={() => setIsSecurity((prev) => !prev)}
              name="IsSecurity"
              type="checkbox"
            />
            <span className="text-xs ml-3">Use Secured Access Connection</span>
          </div>
          <div className="col-span-1 px-3 py-5 flex items-center content-around">
            <input
              onClick={() => setIsUseAuthentication((prev) => !prev)}
              checked={isUseAuthentication}
              type="checkbox"
            />
            <span className="text-xs ml-3">Use Authentication</span>
          </div>
          <div className="col-span-1 px-3 ml-5">
            <label for="host" className={theme === "dark" ? "text-white" : "text-gray-600"}>
              Login
            </label>
            <input
              onChange={handleOnChangeInput}
              name=" Email"
              value={Email}
              placeholder={isUseAuthentication ? "required" : "not required"}
              required={isUseAuthentication}
              type="email"
              id="host"
              className={
                "border-b-2 w-full border-gray-400 bg-yellow-50" +
                " " +
                (theme === "dark" ? "bg-zinc-600" : "")
              }
            />
          </div>
          <div className="col-span-1 px-3 ml-5 lg:mt-8 myScreen:mt-0">
            <label for="host" className={theme === "dark" ? "text-white" : "text-gray-600"}>
              Password
            </label>
            <input
              onChange={handleOnChangeInput}
              name="Password"
              value={Password}
              placeholder={isUseAuthentication ? "required" : "not required"}
              required={isUseAuthentication}
              type="password"
              id="host"
              className={
                "border-b-2 w-full border-gray-400 bg-yellow-50" +
                " " +
                (theme === "dark" ? "bg-zinc-600" : "")
              }
            />
          </div>
          <div className="col-span-1 p-3">
            <label for="host" className="text-gray-600">
              <span className="text-yellow-400 text-[14px]">Email from</span>
            </label>
            <input
              onChange={handleOnChangeInput}
              name="From"
              value={From}
              placeholder="required"
              type="email"
              id="host"
              className={
                "border-b-2 w-full border-gray-400 bg-yellow-50" +
                " " +
                (theme === "dark" ? "bg-zinc-600" : "")
              }
            />
          </div>
          <div className="col-span-1 p-3">
            <label for="host" className="text-gray-600">
              <span className="text-yellow-400 text-[14px]">Email to</span>
            </label>
            <input
              onChange={handleOnChangeInput}
              name="To"
              value={To}
              placeholder="required"
              type="email"
              id="host"
              className={
                "border-b-2 w-full border-gray-400 bg-yellow-50" +
                " " +
                (theme === "dark" ? "bg-zinc-600" : "")
              }
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <p
            className={"p-3 text-sm text-gray-400 mt-3 lg:mt-6" + " " + (isMiniForm ? " " : "mt-9")}
          >
            host or ip address of your smtp server (example:
            <span className="text-green-500">smtp.company.com</span>)
          </p>
          <p className={"p-3 text-sm text-gray-400 mt-3" + " " + (isMiniForm ? " " : "mt-8")}>
            the default port is <span className="text-green-500">25</span>, but some smtp servers
            use a custom port (example: <span className="text-green-500">587</span>)
          </p>
          <p
            className={
              "p-3 text-sm text-gray-400 -mt-2 lg:-mt-4 myScreen:-mt-2" +
              " " +
              (isMiniForm ? " " : "-mt-4")
            }
          >
            checked it only if the smtp server needs a secured connection (
            <span className="text-green-500">ssl, tsl</span>)
          </p>
          <p
            className={
              "p-3 text-sm text-gray-400 -mt-2 lg:-mt-3 myScreen:-mt-2" +
              " " +
              (isMiniForm ? " " : "-mt-1")
            }
          >
            Most of smtp servers need an authentication (
            <span className="text-green-500"> login/password</span>
            ). Check it if required
          </p>
          <p
            className={"p-3 text-gray-400 mt-3 myScreen:-mt-1" + " " + (isMiniForm ? " " : "mt-3")}
          >
            Required if 'Use authentication' is checked (ex:{" "}
            <span className="text-green-500">account</span> or{" "}
            <span className="text-green-500">account@foo.com</span>)
          </p>
          <p className={"p-3 text-gray-400 -mt-4" + " " + (isMiniForm ? " " : "mt-5")}>
            Required if 'Use authentication' is checked
          </p>{" "}
          <p
            className={
              "p-3 text-gray-400 mt-2 lg:mt-0 myScreen:mt-2" + " " + (isMiniForm ? " " : "mt-5")
            }
          >
            The sender's email address (example:{" "}
            <span className="text-green-500">account@foo.com</span>)
          </p>
          <p
            className={
              "p-3 text-gray-400 mt-3 lg:mt-1 myScreen:mt-3" + " " + (isMiniForm ? " " : "mt-4")
            }
          >
            very important : the test mail will be sent to this address (ex:{" "}
            <span className="text-green-500">account@foo.com</span>)
          </p>
        </div>
        <div className="text-gray-600 mx-3 my-1">
          <p>Test Your Mail Server</p>
        </div>
      </div>
      <button className="absolute  bg-red-500 px-3 py-1 lg:right-[450px] lg:bottom-[65px] myScreen:bottom-5 myScreen:right-5 rounded-md bottom-5 right-5 flex items-center w-20 content-between text-white">
        <FiSend className="mr-auto" />
        Send
      </button>
    </div>
  );
};

export default FormBody;
