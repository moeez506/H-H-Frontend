/* eslint-disable prettier/prettier */
import React from "react";

const IndividualProfile = () => {
  return (
    <div className="h-[90%] w-[90%] bg-white shadow-md p-10 -z-10 mobile:absolute">
      <div>
        <h1>
          Hello, <span>Abdul Rehman</span>
        </h1>
      </div>
      <div className="flex items-center">
        <div>
          <div className="h-[250px] w-[450px] bg-white shadow-xl rounded-xl">
            <h3 className="pl-7 py-3 font-semibold">Personal Information</h3>
            <hr></hr>
            <br></br>
            <div>
              <div className="flex ml-7">
                <h3 className="text-orange font-bold">Name:</h3>
                <p className="pl-16">Abdul Rehman</p>
              </div>
              <div className="flex ml-7 mt-2">
                <h3 className="text-orange font-bold">Email:</h3>
                <p className="pl-16">test@gmail.com</p>
              </div>
              <div className="flex ml-7 mt-2">
                <h3 className="text-orange font-bold">Contact:</h3>
                <p className="pl-12">555 555 555</p>
              </div>
              <div className="flex ml-7 mt-2">
                <h3 className="text-orange font-bold">Gender:</h3>
                <p className="pl-14">Male</p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <div className="h-[250px] w-[450px] bg-white shadow-xl rounded-xl">
              <h3 className="pl-7 py-3 font-semibold">Personal Information</h3>
              <hr></hr>
              <br></br>
              <div>
                <div className="flex ml-7">
                  <h3 className="text-orange font-bold">Name:</h3>
                  <p className="pl-16">Abdul Rehman</p>
                </div>
                <div className="flex ml-7 mt-2">
                  <h3 className="text-orange font-bold">Email:</h3>
                  <p className="pl-16">test@gmail.com</p>
                </div>
                <div className="flex ml-7 mt-2">
                  <h3 className="text-orange font-bold">Contact:</h3>
                  <p className="pl-12">555 555 555</p>
                </div>
                <div className="flex ml-7 mt-2">
                  <h3 className="text-orange font-bold">Gender:</h3>
                  <p className="pl-14">Male</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          
          
        </div>
      </div>
    </div>
  );
};

export default IndividualProfile;
