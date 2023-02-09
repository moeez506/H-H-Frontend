/* eslint-disable prettier/prettier */
import React from "react";
import map from "../assets/Rectangle 60.png";

const ContactBody = () => {
  return (
    <>
      <div className="bg-contact h-[510px] bg-no-repeat"></div>
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-b from-orange to-yellow h-[830px] w-[520px] m-10 rounded-3xl">
          <h1 className="text-5xl font-bold text-white">Contact Info</h1>
          <p>Head Office Canada: Manahan Road, Scarborough Ontario, M1E 3X8</p>
          <p>Email: info@holdinghandscommunitynetwork.org</p>
          <p>Contact Number: 416-519-3621</p>
          <p>Mon to Fri: 9:00am – 5:00pm</p>
        </div>
        <div className="bg-black h-[830px] w-[780px]">
          <h1 className="text-5xl font-bold text-white">Contact Info</h1>
          Please fill in the below prompts and a proud member of our team will
          be in touch.
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#D0D0D2] shadow-black shadow-xl h-[490px] w-[75%]">
          <h1 className="text-6xl font-bold text-center">OUR LOCATIONS</h1>
          <div className="grid grid-cols-2 justify-center px-20">
            <img src={map} alt="image not found" />
            <div className="bg-white shadow-black shadow-sm">
              <div>
                <h1 className="text-2xl font-bold">Branch Cameroon:</h1>
                <p className="text-xl font-medium">Open today till 10pm</p>
                <p className="text-xl font-light">
                  Commercial Avenue, Bamenda,North West Region, Cameroon
                </p>
                <a href="#" className="text-2xl font-bold">
                  More Info
                </a>
              </div>
              <hr />
              <div>
                <h1 className="text-2xl font-bold">Branch Cameroon:</h1>
                <p className="text-xl font-medium">Open today till 10pm</p>
                <p className="text-xl font-light">
                  Commercial Avenue, Bamenda,North West Region, Cameroon
                </p>
                <a href="#" className="text-2xl font-bold">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBody;
