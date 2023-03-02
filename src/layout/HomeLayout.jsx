import React from "react";
import Navbar from "../components/Navbar";
import { FiMenu } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function HomeLayout() {
  return (
    <div className=" w-full relative">
      <div className="w-full h-10 md:h-16 bg-[#f5726b] flex flex-row justify-between  items-end md:px-5 border-b">
        <NavLink to="/" className="h-10 md:h-16">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/06/Yes_Bank_logo.png"
            alt="logo"
            className="h-full "
          />
        </NavLink>
        <div className="flex md:hidden h-full justify-center items-center mx-5 ">
          <FiMenu className="text-xl text-gray-700" />
        </div>

        <ul className="md:flex flex-row justify-end xl:w-1/3 lg:1/2 w-2/3 text-sm font-light text-white mb-3 hidden ">
          <li className="mx-5">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8 " : ""
                }border-gray-300 pb-2 px-1  hover:border-b-2 whitespace-nowrap `
              }
              to="about"
            >
              Who We Are
            </NavLink>
          </li>

          <li className="mx-5">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8" : ""
                } hover:border-b-2 border-gray-300  pb-2 px-1`
              }
              to="career"
            >
              Careers
            </NavLink>
          </li>

          <li className="mx-5">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8" : ""
                } hover:border-b-2 border-gray-300  pb-2 px-1`
              }
              to="impact"
            >
              Join Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-5/6 m-auto ">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
