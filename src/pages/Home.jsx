import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import HomeCard from "../components/HomeCard";
import FinancialCard from "../components/FinancialCard";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <div className=" w-full relative">
      <img
        src="https://www17.wellsfargomedia.com/assets/images/contextual/responsive/hpprimary/adobestock_177573783_hl_hppb_1700x700.jpg"
        alt=""
        className="w-full"
      />
      <div className="flex flex-row absolute left-10 top-10 ">
        <div className="bg-white rounded-lg w-80 h-[350px] shadow-md shadow-gray-400 p-5">
          <div>
            <h3 className="text-2xl ">Good morning</h3>
            <h6 className="text-gray-400 text-sm font-light">
              Sign on to manage your accounts.
            </h6>
          </div>
          <div>
            <div className="hover:border hover:border-red-700 hover:border-b-2 h-12 flex flex-col  px-4 rounded-md hover:shadow-sm shadow-red-600 mt-5 border-b border-gray-500">
              <span className="text-xs text-gray-500">Username</span>
              <input
                type="text"
                placeholder="example@mail.com"
                className="bg-transparent flex-1 outline-none text-gray-700 "
              />
            </div>
            <div className="hover:border hover:border-red-700 hover:border-b-2 h-12 flex flex-col  px-4 rounded-md hover:shadow-sm shadow-red-600 mt-5 border-b border-gray-500">
              <span className="text-xs text-gray-500 ">Password</span>
              <input
                type="password"
                placeholder="**********"
                className="bg-transparent flex-1 outline-none text-gray-700 "
              />
            </div>
          </div>
          <div className="my-5 flex flex-row justify-between ">
            <span className="cursor-pointer px-4 py-2 border-b rounded-full text-sm border-red-800 hover:bg-red-800 hover:text-white font-light">
              Sign on
            </span>
            <span className="cursor-pointer px-4 py-2 border-b rounded-full text-sm border-red-800 hover:bg-red-800 hover:text-white font-light">
              Enroll now
            </span>
          </div>
        </div>
        <div className="ml-10 h-[350px] flex flex-col justify-center ">
          <h1 className="text-6xl font-light">
            $0 has never felt like so <br /> much
          </h1>
          <h6 className="my-5 text-2xl ">$0 online trades with Bank Mega</h6>
          <span className="w-56 border border-gray-700 text-center py-2 rounded-full text-lg hover:bg-black hover:text-white cursor-pointer">
            Take Control
          </span>
        </div>
      </div>

      {/* middle square divs */}
      <div className="flex flex-row w-full justify-between px-5">
        <HomeCard
          topic="Buying a house? We can help."
          image="https://cdn.pixabay.com/photo/2017/09/12/06/26/home-2741413_1280.png"
          link="/"
        />
        <HomeCard
          topic="Pay with pride"
          image="https://cdn.iconscout.com/icon/free/png-256/credit-card-2650080-2196542.png"
          link="/"
        />
        <HomeCard
          topic="Find a credit card"
          image="https://cdn3d.iconscout.com/3d/premium/thumb/credit-card-5706064-4755619.png"
          link="/"
        />
        <HomeCard
          topic="Interest rate today"
          image="https://www.svgrepo.com/download/205823/percentage-percent.svg"
          link="/"
        />
      </div>

      {/* first content  */}
      <div className="flex flex-col items-center my-10">
        <span className="border border-red-800 w-24 mb-10"></span>
        <h1 className="text-4xl font-thin mb-16">
          Financial guidance and support
        </h1>
        <div className="w-full flex flex-row justify-between px-5">
          <FinancialCard />
          <FinancialCard />
          <FinancialCard />
        </div>
      </div>

      {/* Second Content */}

      <div className="flex flex-col items-center my-10">
        <span className="border border-red-800 w-24 mb-10"></span>
        <h1 className="text-4xl font-thin mb-10">
          Serving our customers and communities
        </h1>
        <p className="mb-16 text-gray-800 text-lg">
          It doesn't happen with one transaction, in one day on the job, or in
          one quarter. It's earned relationship by relationship.
        </p>
        <div className="w-full flex flex-row justify-between px-5">
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
