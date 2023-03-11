import React from "react";

function DashboardCard({ topic, Icon, price, currency }) {
  return (
    <div className="w-1/4 border mx-5 h-52  bg-[#62fcdb] border-gray-50 ">
      <div className="bg-white h-10 w-10 flex justify-center items-center mx-5 my-5 rounded-full">
        <Icon />
      </div>

      <h6 className="text-xs text-gray-500 mx-5 mt-16 ">{topic}</h6>
      <h1 className="mx-5 mt-4 ">
        {currency} <span className="text-2xl ">{price}</span>
      </h1>
    </div>
  );
}

export default DashboardCard;
