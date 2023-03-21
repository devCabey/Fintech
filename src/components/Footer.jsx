import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#1c1c1c]  text-white mt-1 py-2">
      <div className="w-full  flex flex-col items-center justify-center">
        <img
          src="https://www.pngarts.com/files/3/Logo-PNG-Download-Image.png"
          alt="logo"
          className="h-10 md:h-12 m-4"
        />
        <p className="font-light text-xs text-gray-500">
          &copy;2023 Bank Mega. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
