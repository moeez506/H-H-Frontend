/* eslint-disable prettier/prettier */
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#0C1214] h-20 flex justify-center flex-1">
      <div></div>
      <div className="flex flex-row text-white justify-center pt-8">
        <p className="mx-6 hover:text-orange hover:border-t-2 border-orange">Home</p>
        <p className="mx-6 hover:text-orange hover:border-t-2 border-orange">About Us</p>
        <p className="mx-6 hover:text-orange hover:border-t-2 border-orange">Our Programs</p>
        <p className="mx-6 hover:text-orange hover:border-t-2 border-orange">Contact Us</p>
        <p className="mx-6 hover:text-orange hover:border-t-2 border-orange">Market Place</p>
      </div>
      <div className="flex justify-center items-center relative left-1/4 ">
        <p className="text-white border-2 mx-3 px-1">Login</p>
        <p className="text-white border-2 mx-3 px-1">Register</p>
      </div>
    </div>
  );
};

export default Navbar;
