import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function BankComponent({ account, increase, balance, number, name }) {
  return (
    <div className="w-96 mx-5  px-3 pt-5 border bg-gray-800 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h1 className="flex-1 text-gray-50 text-sm">{account}</h1>
        <BsFillArrowUpCircleFill className="text-green-700" />
        <h6 className="mx-3 text-green-700">+{increase}%</h6>
      </div>
      <div className="border-b my-5 py-2">
        <h1 className="text-xs text-gray-400 ">Account Balance</h1>
        <h6 className="text-xl text-green-300">{balance}</h6>
      </div>
      <div>
        <div className="mb-2">
          <h1 className="text-xs font-light text-gray-400">Account Number</h1>
          <h6 className="text-sm text-gray-50 font-thin">{number}</h6>
        </div>
        <div className="mb-3">
          <h1 className="text-xs font-light text-gray-400">Account Name</h1>
          <h6 className="text-sm text-gray-50 font-thin">{name}</h6>
        </div>
      </div>
    </div>
  );
}

export default BankComponent;
