import React from "react";

function DashboardCard({ topic, Icon, price, currency }) {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/4 border m-5 h-52  bg-gray-800 rounded-md border-gray-50 ">
      <div className="bg-green-300 h-10 w-10 flex justify-center items-center mx-5 my-5 rounded-full">
        <Icon />
      </div>

      <h6 className="text-xs text-gray-300 mx-5 mt-16 font-extrabold ">
        {topic}
      </h6>
      <h1 className="mx-5 mt-4  text-green-300">
        {currency} <span className="text-2xl ">{price}</span>
      </h1>
    </div>
  );
}

export default DashboardCard;
