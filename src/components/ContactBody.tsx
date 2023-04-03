/* eslint-disable prettier/prettier */
import React from "react";
import map from "../assets/Rectangle 60.png";
import first from "../assets/Frame1.png";
import Button from "./Button";

const ContactBody = () => {
  return (
    <>
      <div className="bg-contact h-[700px] bg-no-repeat bg-cover mb-2 tabletOnly:h-60 mobile:h-36"></div>
      <div className=" flex justify-center items-center tabletOnly:flex-col mobile:flex-col mobile:p-5">
        <div className="bg-gradient-to-b from-orange to-yellow h-[830px] text-white w-[520px] m-10 rounded-3xl mobile:w-full">
          <h1 className="text-5xl font-bold text-center pt-8">Contact Info</h1>
          <br />
          <br />
          <div className="pl-10 mobile:pl-5 ">
            <p>
              <strong>Head Office Canada:</strong> Manahan Road, Scarborough
              Ontario, M1E 3X8
            </p>
            <br />
            <p>
              <strong>Email:</strong> info@holdinghandscommunitynetwork.org
            </p>
            <br />
            <p>
              <strong>Contact Number:</strong> 416-519-3621
            </p>
            <br />
            <p>
              <strong>Mon to Fri:</strong> 9:00am – 5:00pm
            </p>
          </div>
          <br />
          <br />
          <div className="flex justify-center items-center">
          <img src={first} alt="ni image found" />

          </div>
          
        </div>
        <div className="mobile:h-[900px] bg-white rounded-3xl shadow-black shadow-lg h-[830px] w-[780px] tabletOnly:w-[500px] pl-8 pt-16 pr-12 mobile:w-full ">
          <h1 className="text-5xl font-bold">Contact Info</h1>
          <br />
          <p>
            Please fill in the below prompts and a proud member of our team will
            be in touch.
          </p>
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
                className="border text-gray-900 sm:text-sm rounded-lg laptop:w-full tabletOnly:w-full mobile:w-full p-3 dark:placeholder-gray-400"
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
                className="border text-gray-900 sm:text-sm rounded-lg laptop:w-full tabletOnly:w-full p-3 mobile:w-full dark:placeholder-gray-400"
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
                className="border text-gray-900 sm:text-sm rounded-lg laptop:w-full tabletOnly:w-full p-3 mobile:w-full dark:placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject*"
                className="border text-gray-900 sm:text-sm rounded-lg laptop:w-full tabletOnly:w-full p-3 mobile:w-full dark:placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Meassage*"
                className="border text-gray-900 sm:text-sm rounded-lg laptop:w-full tabletOnly:w-full p-3 mobile:w-full dark:placeholder-gray-400 h-[160px]"
              />
            </div>
            <Button text="Contact Us" route="/contact"/>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <div className="mobile:m-5 bg-[#ececed] shadow-black shadow-xl rounded-2xl h-full w-[75%] mobile:w-full">
          <h1 className="text-6xl mobile:text-5xl font-bold text-center text-orange pt-5">
            OUR LOCATIONS
          </h1>
          <div className="grid grid-cols-2 justify-center px-20 py-10 tabletOnly:flex flex-col mobile:flex mobile:px-5">
            <img src={map} alt="image not found" />
            <div className="mt-5 bg-white shadow-black shadow-sm rounded-lg flex flex-col justify-center items-center">
              <div className="p-5 ">
                <h1 className="text-2xl font-bold text-orange">Branch Cameroon:</h1>
                <p className="text-xl font-medium">Open today till 10pm</p>
                <p className="text-xl font-light">
                  Commercial Avenue, Bamenda,North West Region, Cameroon
                </p>
                <a href="#" className="text-2xl font-bold text-orange">
                  More Info
                </a>
              </div>
              
              <div className="h-[1px] w-full bg-footer"></div>
              
              <div className="p-5">
                <h1 className="text-2xl font-bold text-orange">Branch Cameroon:</h1>
                <p className="text-xl font-medium">Open today till 10pm</p>
                <p className="text-xl font-light">
                  Commercial Avenue, Bamenda,North West Region, Cameroon
                </p>
                <a href="#" className="text-2xl font-bold text-orange">
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
