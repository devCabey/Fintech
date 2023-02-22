import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function HomeLayout() {
  return (
    <div className=" w-full">
      <div className="w-full h-20 bg-[#f5726b] flex flex-row justify-between  items-end md:px-5 border-b">
        <NavLink to="/" className="h-16">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/union-bank-logo-png-transparent.png"
            alt="logo"
            className="h-full w-44"
          />
        </NavLink>
        <ul className="flex flex-row justify-between w-1/3 text-sm font-light text-white mb-3">
          <li className="h-full ">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8 " : ""
                }border-gray-300 pb-2 px-1  hover:border-b-2 `
              }
              to="about"
            >
              Who We Are
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8" : ""
                }  hover:border-b-2 border-gray-300  pb-2 px-1`
              }
              to="news"
            >
              News & Stories
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8" : ""
                } hover:border-b-2 border-gray-300  pb-2 px-1`
              }
              to="impact"
            >
              Impact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8" : ""
                }  hover:border-b-2 border-gray-300  pb-2 px-1`
              }
              to="institute"
            >
              Institute
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-8" : ""
                } hover:border-b-2 border-gray-300  pb-2 px-1`
              }
              to="investor"
            >
              Investors
            </NavLink>
          </li>
          <li>
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
