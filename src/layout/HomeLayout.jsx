import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function HomeLayout() {
  return (
    <div className=" w-full">
      <div className="w-5/6 m-auto ">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
