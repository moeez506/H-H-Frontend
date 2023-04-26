/* eslint-disable prettier/prettier */
import React from "react";

const IndividualProfile = () => {
  return (
    <div className="h-[95%] w-[90%] bg-white shadow-md p-10 -z-10 tabletOnly:w-full mobile:w-full mobile:h-full mobile:p-3">
      <div>
        <h1 className="text-4xl font-semibold">
          Hello, <span className="text-orange">Abdul Rehman</span>
        </h1>
      </div>
      <br></br>
      <div className="flex items-center">
        <div>
          <div className="h-[250px] w-[100%] bg-white shadow-xl rounded-xl mobile:w-[100%]">
            <h3 className="pl-7 py-3 font-semibold">Personal Information</h3>
            <hr></hr>
            <br></br>
            <div className="pl-8 pr-24 mobile:pr-10 mobile:pl-3">
              <div className="flex">
                <h3 className="text-orange font-bold">Name:</h3>
                <p className="pl-16">Abdul Rehman</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Email:</h3>
                <p className="pl-16">test@gmail.com</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Contact:</h3>
                <p className="pl-12">555 555 555</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Gender:</h3>
                <p className="pl-14">Male</p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="h-[250px] w-[100%] bg-white shadow-xl rounded-xl mobile:w-[100%]">
            <h3 className="pl-7 py-3 font-semibold">Further Information</h3>
            <hr></hr>
            <br></br>
            <div className="pl-8 pr-24 mobile:pr-8 mobile:pl-3">
              <div className="flex">
                <h3 className="text-orange font-bold">Address:</h3>
                <p className="pl-16">University of Education, Lahore</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Zip Code:</h3>
                <p className="pl-16">55555</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Nationality:</h3>
                <p className="pl-10">Pakistani</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Date of Birth:</h3>
                <p className="pl-8">April 29, 1999</p>
              </div>
            </div>
          </div>
         
        </div>
        <br></br>


      </div>
      
    </div>
  );
};

export default IndividualProfile;
