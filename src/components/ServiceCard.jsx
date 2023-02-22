import React from "react";

function ServiceCard() {
  return (
    <div className="w-2.3/5 pb-10 border rounded-xl shadow-md shadow-gray-300 ">
      <img
        src="https://www17.wellsfargomedia.com/assets/images/rwd/woman_in_office_616x353.jpg"
        className="rounded-tl-xl rounded-tr-xl "
      />
      <div className="w-full px-4 mt-6">
        <h1 className="text-xl font-medium ">Save. Invest. Retire well.</h1>
        <h6 className="text-lg font-light text-gray-500 mt-5 ">
          Discover how to start saving to meet your requirement goals
        </h6>
        <div className="mt-8 w-56 h-10 flex flex-row justify-center items-center border border-black rounded-full  cursor-pointer hover:bg-black hover:text-white ">
          <p className="text-sm font-semibold"> Get ready for retirement</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
