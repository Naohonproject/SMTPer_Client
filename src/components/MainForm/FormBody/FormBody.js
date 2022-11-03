import { FiSend } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

const FormBody = () => {
  return (
    <div className="grid grid-cols-12 md:grid-cols-4 h-max relative">
      <div className="md:col-span-1 col-span-1 sm:col-span-1 bg-gray-300 ">
        <div className="flex md:flex-row flex-col items-center justify-between md:justify-start h-20 md:h-10 p-1 md:p-3 md:bg-gray-700 text-white">
          <AiOutlineMenu className="block md:hidden text-center h-10 text-gray-900" />
          <span className="hidden md:block">Test & Check</span>
          <FiSend className="text-center md:ml-auto text-red-500 sm:text-white " />
        </div>
      </div>
      <div className="bg-yellow-50 p-3 col-span-10 md:col-span-3  grid grid-cols-1 lg:grid-cols-2  gap-2">
        <div>
          <div className="col-span-1 p-3">
            <label for="host" className="text-red-600">
              SMTP host
            </label>
            <input
              placeholder="required"
              type="text"
              id="host"
              className="border-b-2 w-full border-gray-400 bg-yellow-50"
              required
            />
          </div>
          <div className="col-span-1 p-3">
            <label for="host" className="text-gray-600">
              Port
            </label>
            <input
              placeholder="required"
              type="text"
              id="host"
              className="border-b-2 w-full border-gray-400 bg-yellow-50 border-half"
              required
            />
          </div>
          <div className="col-span-1 px-3 py-5 flex items-center content-around">
            <input type="checkbox" />
            <span className="text-xs ml-3">Use Secured Access Connection</span>
          </div>
          <div className="col-span-1 px-3 py-5 flex items-center content-around">
            <input type="checkbox" />
            <span className="text-xs ml-3">Use Authentication</span>
          </div>
          <div className="col-span-1 px-3 ml-5">
            <label for="host" className="text-gray-600">
              Login
            </label>
            <input
              placeholder="not required"
              type="text"
              id="host"
              className="border-b-2 w-full border-gray-400 bg-r bg-yellow-50"
            />
          </div>
          <div className="col-span-1 px-3 ml-5">
            <label for="host" className="text-gray-600">
              Password
            </label>
            <input
              placeholder="not required"
              type="text"
              id="host"
              className="border-b-2 w-full border-gray-400 bg-r bg-yellow-50"
            />
          </div>
          <div className="col-span-1 p-3">
            <label for="host" className="text-gray-600">
              <span className="text-yellow-400 text-[14px]">Email from</span>
            </label>
            <input
              placeholder="required"
              type="text"
              id="host"
              className="border-b-2 w-full border-gray-400 bg-r bg-yellow-50"
            />
          </div>
          <div className="col-span-1 p-3">
            <label for="host" className="text-gray-600">
              <span className="text-yellow-400 text-[14px]">Email to</span>
            </label>
            <input
              placeholder="required"
              type="text"
              id="host"
              className="border-b-2 w-full border-gray-400 bg-r bg-yellow-50"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <p className="p-3 text-sm text-gray-400 mt-3">
            host or ip address of your smtp server (example:
            <span className="text-green-500">smtp.company.com</span>)
          </p>
          <p className="p-3 text-sm text-gray-400 mt-3">
            the default port is <span className="text-green-500">25</span>, but some smtp servers
            use a custom port (example: <span className="text-green-500">587</span>)
          </p>
          <p className="p-3 text-sm text-gray-400 -mt-2">
            checked it only if the smtp server needs a secured connection (
            <span className="text-green-500">ssl, tsl</span>)
          </p>
          <p className="p-3 text-sm text-gray-400 -mt-2">
            checked it only if the smtp server needs a secured connection (
            <span className="text-green-500">ssl, tsl</span>)
          </p>
          <p className="p-3 text-gray-400">
            required if 'Use authentication' is checked (ex:{" "}
            <span className="text-green-500">account</span> or{" "}
            <span className="text-green-500">account@foo.com</span>)
          </p>
        </div>
        <div className="text-gray-600 m-3">
          <p>Test Your Mail Server</p>
        </div>
      </div>
      <button className="absolute  bg-red-500 px-3 py-1 rounded-md bottom-5 right-5 flex items-center w-20 content-between text-white">
        <FiSend className="mr-auto" />
        Send
      </button>
    </div>
  );
};

export default FormBody;
