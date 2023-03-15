import React from "react";
import BankComponent from "../components/BankComponent";
import BankCard from "../components/BankCard";
import { MdAttachMoney } from "react-icons/md";

function Bank() {
  return (
    <div>
      <div className="mb-6 flex justify-between">
        <h1 className="text-2xl font-bold ">My Bank</h1>
        <span className="flex justify-center items-center px-2 py-1 bg-green-300 text-sm font-medium cursor-pointer rounded">
          Transfer <MdAttachMoney className="text-slate-700 font-bold" />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <BankComponent
          account="Checking Account"
          increase="2.3"
          balance="10,000.00"
          number="AB11 0000 0000 1111 1111"
          name="Caleb Lord"
        />
        <BankComponent
          account="Saving Account"
          increase="4.5"
          balance="8,000.00"
          number="AB11 0000 0000 1111 1111"
          name="Caleb Lord"
        />
        <BankComponent
          account="Budget Account"
          increase="23.3"
          balance="60,000.00"
          number="AB11 0000 0000 1111 1111"
          name="Caleb Lord"
        />
      </div>
      <div className="my-10">
        <h1 className="text-xl font-medium ml-6">My Cards</h1>
      </div>
      <div className="flex justify-center items-center">
        <BankCard
          type="CREDIT CARD"
          balance="10,453.00"
          number="**** **** **** 2134"
          date="09/25"
          name="CALEB LORD"
        />
        <BankCard
          type="DEBIT CARD"
          balance="100,453.00"
          number="**** **** **** 4212"
          date="09/24"
          name="CALEB LORD"
        />
      </div>
      <div className="w-full my-10 flex items-center justify-center">
        <div className="flex  items-center justify-center bg-amber-400 w-96 py-1 rounded-md cursor-pointer hover:border-amber-700 hover:border">
          <span className="text-slate-800">Check Transaction Details </span>
        </div>
      </div>
    </div>
  );
}

export default Bank;
