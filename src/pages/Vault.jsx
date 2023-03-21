import React from "react";
import VaultTable from "../components/VaultTable";

function Vault() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center ">
        <h1 className="text-2xl font-bold ">My Vault</h1>
        <div className="flex items-center">
          <span className="text-lg font-semibold ">Total Worth : </span>
          <span className="ml-2 text-lg text-gray-700 ">$950,000</span>
        </div>
      </div>

      <div className="w-full mt-10">
        <VaultTable />
      </div>
    </div>
  );
}

export default Vault;
