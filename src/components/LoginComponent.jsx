import React from "react";
import { Link } from "react-router-dom";

function LoginComponent() {
  return (
    <div className="bg-white rounded-lg w-full h-[350px] sm:shadow-md shadow-gray-400 p-5 ">
      <div>
        <h3 className="text-2xl ">Good morning</h3>
        <h6 className="text-gray-400 text-sm font-light">
          Sign on to manage your accounts.
        </h6>
      </div>
      <div>
        <div className="hover:border hover:border-red-700 hover:border-b-2 h-12 flex flex-col  px-4 rounded-md hover:shadow-sm shadow-red-600 mt-5 border-b border-gray-500">
          <span className="text-xs text-gray-500">Username</span>
          <input
            type="text"
            placeholder="example@mail.com"
            className="bg-transparent flex-1 outline-none text-gray-700 "
          />
        </div>
        <div className="hover:border hover:border-red-700 hover:border-b-2 h-12 flex flex-col  px-4 rounded-md hover:shadow-sm shadow-red-600 mt-5 border-b border-gray-500">
          <span className="text-xs text-gray-500 ">Password</span>
          <input
            type="password"
            placeholder="**********"
            className="bg-transparent flex-1 outline-none text-gray-700 "
          />
        </div>
      </div>
      <div className="my-5 flex flex-row justify-between ">
        <span />
        <span className="cursor-pointer px-4 py-2 border-b rounded-full text-sm border-red-800 hover:bg-red-800 hover:text-white font-light">
          <Link to="user">Sign on</Link>
        </span>
        {/* <span className="cursor-pointer px-4 py-2 border-b rounded-full text-sm border-red-800 hover:bg-red-800 hover:text-white font-light">
          Enroll now
        </span> */}
      </div>
    </div>
  );
}

export default LoginComponent;
