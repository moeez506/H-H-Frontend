/* eslint-disable prettier/prettier */
import React from "react";
import map from "../assets/Rectangle 60.png";
import Button from "./Button";

const ContactBody = () => {
  return (
    <>
      <div className="bg-contact h-[510px] bg-no-repeat"></div>
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-b from-orange to-yellow h-[830px] text-white w-[520px] m-10 rounded-3xl">
          <h1 className="text-5xl font-bold text-center pt-8">Contact Info</h1>
          <br />
          <br />
          <div className="pl-10">
          <p><strong>Head Office Canada:</strong> Manahan Road, Scarborough Ontario, M1E 3X8</p>
          <br />
          <p><strong>Email:</strong> info@holdinghandscommunitynetwork.org</p>
          <br />
          <p><strong>Contact Number:</strong> 416-519-3621</p>
          <br />
          <p><strong>Mon to Fri:</strong> 9:00am – 5:00pm</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-black shadow-lg h-[830px] w-[780px] pl-12 pt-16 pr-12">
          <h1 className="text-5xl font-bold">Contact Info</h1>
          <br />
          <p>Please fill in the below prompts and a proud member of our team will
          be in touch.</p>
          <br />
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border text-gray-900 sm:text-sm rounded-lg w-full p-3 dark:placeholder-gray-400"
                placeholder="Name*"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Email
              </label>
              
              <input
                type="email"
                name="email"
                id="email"
                className="border text-gray-900 sm:text-sm rounded-lg w-full p-3 dark:placeholder-gray-400"
                placeholder="Email Address*"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-black">
                Number
              </label>
              <input
                type="number"
                name="password"
                id="password"
                placeholder="Contact Number*"
                className="border text-gray-900 sm:text-sm rounded-lg w-full p-3 dark:placeholder-gray-400"
              />
            </div>
            <div>              
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject*"
                className="border text-gray-900 sm:text-sm rounded-lg w-full p-3 dark:placeholder-gray-400"
              />
            </div>
            <div>              
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Meassage*"
                className="border text-gray-900 sm:text-sm rounded-lg w-full p-3 dark:placeholder-gray-400 h-[160px]"
              />
            </div>
            <Button text="Contact Us"/>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#ececed] shadow-black shadow-xl h-[490px] w-[75%]">
          <h1 className="text-6xl font-bold text-center text-orange">OUR LOCATIONS</h1>
          <div className="grid grid-cols-2 justify-center px-20">
            <img src={map} alt="image not found" />
            <div className="bg-white shadow-black shadow-sm rounded-lg flex flex-col justify-center items-center" >
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
              <br />
              <div className="h-[1px] w-full bg-footer"></div>
              <br />
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
