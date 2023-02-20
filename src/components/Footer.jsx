import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-700 h-96  text-white mt-1 pt-20">
      <div className="w-5/6  grid grid-cols-5 m-auto ">
        <ul>
          <li>Explore</li>
          <li>Who We Are</li>
          <li>Investor Relations</li>
          <li>Impact</li>
          <li>Institute</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>More Information</li>
          <li>Suppliers</li>
          <li>Historical Prime Rate</li>
          <li>Media Contacts</li>
        </ul>
        <ul>
          <li>Related Sites</li>
          <li>Chase</li>
          <li>JP Morgan</li>
          <li>Chase Canada</li>
          <li>Chase Careers</li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>Privacy & Security</li>
          <li>Terms & Conditions</li>
          <li>Accessiblity</li>
        </ul>
        <ul>
          <li>Connect with us</li>
          <li>JP Chase Morgan</li>
          <li>Chase Morgan</li>
        </ul>
      </div>
      <div className="w-5/6 m-auto flex flex-col items-center">
        <img
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30160306/447.png"
          alt="logo"
          className="h-24 w-56 m-4"
        />
        <p className="font-light text-xs">
          &copy;2023 Bank Mega. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
