import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-100 h-14 flex flex-row md:justify-between  justify-center items-end sticky top-0 bg-gray-200 px-1  z-50 mb-2">
      
      <ul className="flex flex-row justify-between  text-sm font-light text-gray-600 mb-2">
        <li className="h-full ">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2 " : ""
              }border-[#6e0802] pb-2 px-1 mx-2  hover:border-b-2 `
            }
            to="checking"
          >
            Checking
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2" : ""
              }  hover:border-b-2 border-[#6e0802]  pb-2 px-1 mx-2`
            }
            to="saving"
          >
            Savings
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2" : ""
              } hover:border-b-2 border-[#6e0802]  pb-2 px-1 mx-2`
            }
            to="credit_card"
          >
            Credit Cards
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2" : ""
              }  hover:border-b-2 border-[#6e0802]  pb-2 px-1 mx-2`
            }
            to="merchant"
          >
            Merchant Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2" : ""
              } hover:border-b-2 border-[#6e0802]  pb-2 px-1 mx-2`
            }
            to="loan"
          >
            Loans
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "border-b-2" : ""
              } hover:border-b-2 border-[#6e0802]  pb-2 px-1 mx-2`
            }
            to="commercial_banking"
          >
            Commercial Banking
          </NavLink>
        </li>
      </ul>
      <span></span>
    </div>
  );
}

export default Navbar;
