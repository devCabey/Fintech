import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#1c1c1c] h-96  text-white mt-1 pt-20">
      <div className="w-5/6  grid grid-cols-5 m-auto ">
        <ul>
          <li className="footer_head">Explore</li>
          <li className="footer_item">Who We Are</li>
          <li className="footer_item">Investor Relations</li>
          <li className="footer_item">Impact</li>
          <li className="footer_item">Institute</li>
          <li className="footer_item">Careers</li>
        </ul>
        <ul>
          <li className="footer_head">More Information</li>
          <li className="footer_item">Suppliers</li>
          <li className="footer_item">Historical Prime Rate</li>
          <li className="footer_item">Media Contacts</li>
        </ul>
        <ul>
          <li className="footer_head">Related Sites</li>
          <li className="footer_item">Chase</li>
          <li className="footer_item">JP Morgan</li>
          <li className="footer_item">Chase Canada</li>
          <li className="footer_item">Chase Careers</li>
        </ul>
        <ul>
          <li className="footer_head">Legal</li>
          <li className="footer_item">Privacy & Security</li>
          <li className="footer_item">Terms & Conditions</li>
          <li className="footer_item">Accessiblity</li>
        </ul>
        <ul>
          <li className="footer_head">Connect with us</li>
          <li className="footer_item">JP Chase Morgan</li>
          <li className="footer_item">Chase Morgan</li>
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
