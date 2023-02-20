import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className=" w-full">
      <div className="w-5/6 m-auto ">
        <Navbar />
        <div>
          <Outlet />
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default HomeLayout;
