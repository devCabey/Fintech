import React from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
function BankCard({ type, balance, number, date, name }) {
  return (
    <div className="gradient_color w-3/5 h-80 mx-10 rounded-lg p-7">
      <div className="flex justify-end items-center">
        <h1 className="text-sm mb-3 font-medium text-slate-600">
          <RiMastercardFill className="text-slate-500" />
          {type}
        </h1>
      </div>
      <div className="my-5">
        <h1 className="text-xs font-light">Available Balance</h1>
        <h1 className="text-xl ">USD {balance}</h1>
      </div>
      <div className="w-full flex justify-between items-center ">
        <h1 className="flex-1 text-4xl font-thin tracking-widest">{number}</h1>
        <FcSimCardChip className="text-6xl " />
      </div>

      <div className="flex justify-left items-center my-3">
        <div className="mr-10">
          <h1 className="text-xs">Expire Date</h1>
          <h6>{date}</h6>
        </div>
        <div className="ml-10">
          <h1 className="text-xs"> CVV</h1>
          <h6>***</h6>
        </div>
      </div>

      <h1 className="text-lg">{name}</h1>
    </div>
  );
}

export default BankCard;
