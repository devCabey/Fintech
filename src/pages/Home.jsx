import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className=" w-full">
      <Carousel />
      <div className="h-96 bg-green-600"></div>
      <div className="h-96 bg-gray-600"></div>
      <div className="h-96 bg-blue-600"></div>
    </div>
  );
}

export default Home;
