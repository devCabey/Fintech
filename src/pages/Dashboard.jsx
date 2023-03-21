import React from "react";
import DashboardCard from "../components/DashboardCard";
import { AiFillCreditCard, AiOutlineTransaction } from "react-icons/ai";
import { SiVault } from "react-icons/si";
import { RiLuggageDepositFill } from "react-icons/ri";
import TransactionTable from "../components/TransactionTable";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row  md:justify-between">
        <div className="">
          <h1 className="text-lg font-medium ">Hello Caleb! 👋</h1>
          <h6 className="text-xs ">
            We hope all is well and you have a great day.
          </h6>
        </div>
        <div className="mt-5  md:mt-0">
          <span className="border px-3 py-2 mx-2 text-xs border-gray-600 cursor-pointer">
            Send&nbsp;Money
          </span>
          <Link
            to="bank"
            className="border px-3 py-2 mx-2 text-xs bg-green-300 cursor-pointer border-gray-600"
          >
            Check&nbsp;Account
          </Link>
        </div>
      </div>
      <div className="w-full border border-gray-200 my-12 mx-5"></div>
      {/* Some Account details  */}
      <div className="w-full flex items-center justify-start my-5 mx-5">
        <h1 className="text-lg font-normal">Status</h1>{" "}
        <span className="border-b w-5 mx-1 border-gray-500"></span>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <DashboardCard
          topic="ACCOUNT BALANCE"
          Icon={AiFillCreditCard}
          price="405,000"
          currency="$"
        />
        <DashboardCard
          topic="VAULT WORTH"
          Icon={SiVault}
          price="1,569,000"
          currency="$"
        />
        <DashboardCard
          topic="TOTAL WITHDRAWS"
          Icon={AiOutlineTransaction}
          price="400,000"
          currency="$"
        />
        <DashboardCard
          topic="TOTAL DEPOSIT"
          Icon={RiLuggageDepositFill}
          price="805,000"
          currency="$"
        />
      </div>
      {/* A few recent transactions */}
      <div className="w-full flex items-center justify-between mt-16 mb-5 mx-5">
        <div className=" flex justify-start items-center">
          <h1 className="text-lg font-normal">Transactions</h1>{" "}
          <span className="border-b w-5 mx-1 border-gray-500"></span>
        </div>
        <Link
          to="transaction"
          className="px-3 py-2  text-white bg-black mt-5 text-xs mr-2 cursor-pointer"
        >
          View All
        </Link>
      </div>
      <div className="w-full mb-10  flex justify-center items-center">
        <div className="w-56 sm:w-96 md:w-full overflow-scroll overflow-x-scroll">
          <TransactionTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
