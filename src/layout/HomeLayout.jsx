import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiMenu } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink, Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomeLayout() {
  const [sideNav, setSetNav] = useState(true);

  return (
    <div className=" w-full relative">
      {/* Nav */}
      <div
        className={`absolute top-0  h-[700px] right-0 w-full sm:w-80 bg-white opacity-90  z-50 md:hidden ${
          sideNav ? "flex" : "hidden"
        }`}
      >
        <div className="w-full h-full relative bg-transparent">
          <div className="w-full h-14  flex justify-start items-center pl-5">
            <IoMdCloseCircleOutline
              className="text-xl"
              onClick={() => setSetNav(!sideNav)}
            />
          </div>
          <div>
            <ul>
              <li>
                <Link>Who we are </Link>
              </li>
              <li>Career</li>
              <li>Legal</li>
              <li>Vault</li>
              <li>Bank</li>
              <li>
                <Link to="join-us">Join us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky top-0 w-full h-10 md:h-16 bg-[#f5726b] flex flex-row justify-between  items-end md:px-5 border-b z-40">
        <NavLink to="/" className="h-6 md:h-10 mx-5">
          <img
            src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png"
            alt="logo"
            className="h-full "
          />
        </NavLink>
        <div
          className="flex md:hidden h-full justify-center items-center mx-5 "
          onClick={() => setSetNav(true)}
        >
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
              Who we are
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
              to="join-us"
            >
              Join Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-5/6 m-auto mt-5 ">
        {/* <Navbar /> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
