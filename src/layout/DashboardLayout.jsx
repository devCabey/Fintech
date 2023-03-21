import React from "react";
import { TfiEmail } from "react-icons/tfi";
import {
  CiBank,
  CiVault,
  CiSettings,
  CiHome,
  CiLink,
  CiDesktop,
} from "react-icons/ci";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

function DashboardLayout() {
  const location = useLocation();
  return (
    <div className=" w-full">
      {/* Top Nav */}
      <div className="w-full h-16  px-5 flex justify-between  bg-white sticky top-0 left-0 right-0 border">
        <div className=" h-full  flex justify-center items-center">
          <img
            src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png"
            alt="Logo"
            className="h-12"
          />
        </div>
        <div className="flex justify-end items-center ">
          <div className="w-20 h-full flex justify-center items-center">
            <img
              src="https://www.westernunion.com/staticassets/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png"
              alt="profile"
              className="w-9 h-9 rounded-full bg-cover "
            />
            <span className="mx-5 text-sm cursor-pointer">Logout</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className=" w-full flex flex-1 ">
        {/* SideNav */}
        <div className="w-64 mr-5  h-full bg-white pt-10  sticky top-20 hidden xl:flex">
          <ul className="w-full  ">
            <li className="w-full h-12 flex justify-center items-center cursor-pointer hover:bg-slate-100 rounded-r-full">
              <NavLink className="w-full flex justify-center h-full" to="/user">
                <div className="w-32 flex justify-start  items-center">
                  <CiHome className="w-5 h-5 mr-2" />
                  <h1 className="text-sm font-medium"> Home</h1>
                </div>
              </NavLink>
            </li>
            <li className="w-full h-12 flex justify-center items-center cursor-pointer hover:bg-slate-100 rounded-r-full">
              <NavLink className="w-full flex justify-center h-full" to="bank">
                <div className="w-32 flex justify-start  items-center">
                  <CiBank className="w-5 h-5 mr-2" />
                  <h1 className="text-sm font-medium"> Bank</h1>
                </div>
              </NavLink>
            </li>
            <li className="w-full h-12 flex justify-center items-center cursor-pointer hover:bg-slate-100 rounded-r-full">
              <NavLink className="w-full flex justify-center h-full" to="vault">
                <div className="w-32 flex justify-start  items-center">
                  <CiVault className="w-5 h-5 mr-2" />
                  <h1 className="text-sm font-medium"> Vault</h1>
                </div>
              </NavLink>
            </li>
            <li className="w-full h-12 flex justify-center items-center cursor-pointer hover:bg-slate-100 rounded-r-full">
              <NavLink
                className="w-full flex justify-center h-full"
                to="transaction"
              >
                <div className="w-32 flex justify-start  items-center">
                  <CiLink className="w-5 h-5 mr-2" />
                  <h1 className="text-sm font-medium"> Transactions </h1>
                </div>
              </NavLink>
            </li>

            <li className="w-full h-12 flex justify-center items-center cursor-pointer hover:bg-slate-100 rounded-r-full">
              <NavLink
                className="w-full flex justify-center h-full"
                to="setting"
              >
                <div className="w-32 flex justify-start  items-center">
                  <CiSettings className="w-5 h-5 mr-2" />
                  <h1 className="text-sm font-medium"> Settings</h1>
                </div>
              </NavLink>
            </li>
            <li className="w-full h-12 flex justify-center items-center cursor-pointer hover:bg-slate-100 rounded-r-full">
              <NavLink
                className="w-full flex justify-center h-full"
                to="support"
              >
                <div className="w-32 flex justify-start  items-center">
                  <CiDesktop className="w-5 h-5 mr-2" />
                  <h1 className="text-sm font-medium"> Support</h1>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1  pt-10 px-5 bg-gray-50">
          {/* Outlet */}
          <div className="w-11/12 h-full ">
            {location.pathname === "/user" ? <Dashboard /> : <Outlet />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
