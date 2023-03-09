import React from "react";
import LoginComponent from "../components/LoginComponent";

function Signup() {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2  bg-white h-[500px] m-auto md:mt-40  flex justify-between">
      <div className="w-1/2 hidden md:block">
        <img
          src="https://auth.kodular.io/static/assets/login/login_illustration.529cb396fd94.svg"
          alt="Illustration"
          className="w-full h-full"
        />
      </div>
      <div className=" w-full  md:w-1/2 flex flex-col justify-center items-center">
        <div className="w-full sm:w-80">
          <LoginComponent />
        </div>
      </div>
    </div>
  );
}

export default Signup;
