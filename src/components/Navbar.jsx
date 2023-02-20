import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-100 h-20 flex flex-row justify-between items-center sticky top-0 bg-white px-1">
      <NavLink to="/" className="h-full">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30160306/447.png"
          alt="logo"
          className="h-full w-44"
        />
      </NavLink>

      <ul className="flex flex-row justify-between w-1/3 text-sm font-light text-gray-600 ">
        <li className="h-full ">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2 " : ""
              }border-blue-700 pb-2 px-1  hover:border-b-2 `
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
                isActive ? "border-b-2" : ""
              }  hover:border-b-2 border-blue-700  pb-2 px-1`
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
                isActive ? "border-b-2" : ""
              } hover:border-b-2 border-blue-700  pb-2 px-1`
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
                isActive ? "border-b-2" : ""
              }  hover:border-b-2 border-blue-700  pb-2 px-1`
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
                isActive ? "border-b-2" : ""
              } hover:border-b-2 border-blue-700  pb-2 px-1`
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
                isActive ? "border-b-2" : ""
              } hover:border-b-2 border-blue-700  pb-2 px-1`
            }
            to="career"
          >
            Careers
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
