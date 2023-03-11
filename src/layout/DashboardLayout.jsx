import React, { useEffect, useState } from "react";
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
    <div className="relative w-full">
      {/* Top Nav */}
      <div className="w-full h-16  px-5 flex justify-between  bg-white">
        <div className=" h-full w-48 flex justify-center items-center">
          <img
            src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png"
            alt="Logo"
            className="w-14"
          />
        </div>
        <div className="flex justify-end items-center ">
          <div className="border-l h-full w-16  flex justify-center items-center">
            <span>
              <TfiEmail className="h-5 w-5 text-gray-500" />
            </span>
          </div>
          <div className="border-l h-full w-16  flex justify-center items-center">
            <img
              src="https://www.westernunion.com/staticassets/content/dam/wu/jm/responsive/send-money-in-person-from-jamaica-resp.png"
              alt="profile"
              className="w-7 h-7 rounded-full bg-cover "
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className=" w-full flex flex-1 ">
        {/* SideNav */}
        <div className="w-64 mr-5  h-full bg-white pt-10  ">
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
