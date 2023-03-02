import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function HomeLayout() {
  return (
    <div className=" w-full relative">
      <div className="w-full h-16 bg-[#f5726b] flex flex-row justify-between  items-end md:px-5 border-b">
        <NavLink to="/" className="h-16">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/union-bank-logo-png-transparent.png"
            alt="logo"
            className="h-full "
          />
        </NavLink>
        <ul className="flex flex-row justify-end md:relative xl:w-1/3 lg:1/2 w-2/3 text-sm font-light text-white mb-3  ">
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
