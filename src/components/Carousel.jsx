import React, { useState } from "react";

function Carousel() {
  const [current, setCurrent] = useState(1);
  let value = 1;

  return (
    <div className="w-full flex flex-col mb-10">
      <div className="w-full h-80 relative">
        <div className="w-full h-full absolute top-0  z-20 bg-black  opacity-30"></div>
        <div className="h-full absolute top-5 left-20 z-30 bg-green-500 w-72"></div>
        <img src={`${current}.jpg`} className="w-full h-full bg-cover z-10 " />
      </div>
      <div className="flex flex-row   w-full justify-center ">
        <span
          className="mr-14 px-2  text-xl rounded-md hover:text-blue-500 text-gray-500 cursor-pointer "
          onClick={() => {
            value = current;
            if (value <= 1) {
              setCurrent(3);
            } else {
              setCurrent((state) => state - 1);
            }
          }}
        >
          {"<"}
        </span>
        <span
          className="ml-14 px-2 text-xl  rounded-md hover:text-blue-500  text-gray-500 cursor-pointer "
          onClick={() => {
            value = current;
            if (value >= 3 || value <= 0) {
              setCurrent(1);
            } else {
              setCurrent((state) => state + 1);
            }
          }}
        >
          {">"}
        </span>
      </div>
    </div>
  );
}

export default Carousel;
