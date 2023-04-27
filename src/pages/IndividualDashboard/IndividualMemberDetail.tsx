/* eslint-disable prettier/prettier */
import React from "react";
import Button from "../../components/Button";

const IndividualMemberDetail = () => {
  return (
    <div className="ml-14 mobile:ml-0 tabletOnly:w-max">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange">Member Detail</h1>
        <Button text="Edit" route="/" />
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        <h1 className="text-2xl font-bold text-orange">Personal Information</h1>
        <br></br>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">Abdul Rehman</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">test@gmail.com</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Contact:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
          </div>
        </div>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">Abdul Rehman</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">test@gmail.com</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Contact:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <h1 className="text-2xl font-bold text-orange">Personal Information</h1>
        <br></br>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">Abdul Rehman</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">test@gmail.com</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Contact:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
          </div>
        </div>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">Abdul Rehman</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">test@gmail.com</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Contact:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default IndividualMemberDetail;
