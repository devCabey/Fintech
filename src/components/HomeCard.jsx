import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function HomeCard({ topic, image, link }) {
  return (
    <Link
      to={link}
      className="w-full  sm:w-96 h-64 sm:m-5 my-5 border border-gray-200 rounded-lg flex flex-col justify-between p-5 shadow-lg shadow-gray-100  bg-slate-100  cursor-pointer hover:border-2 hover:bg-slate-200"
    >
      <div>
        <img src={image} className="w-16 h-16" />
      </div>

      <h1 className="text-xl sm:text-2xl font-light">{topic}</h1>

      <div className="flex flex-row items-center">
        <span className="text-xs sm:text-sm">Learn More</span>
        <HiChevronRight style={{ fontSize: "25px" }} />
      </div>
    </Link>
  );
}

export default HomeCard;
