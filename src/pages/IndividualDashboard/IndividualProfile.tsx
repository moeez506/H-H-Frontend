/* eslint-disable prettier/prettier */
import React from "react";
import "./Dashboard.css";

const IndividualProfile = () => {
  return (
    <div className="flex flex-col ml-20 mobile:ml-0 tabletOnly:ml-0">
      {/* <div className="h-full w-full bg-white rounded-xl shadow-inset shadow-2xl p-10 tabletOnly:w-full mobile:p-3"> */}
      <div>
        <h1 className="text-4xl font-semibold">
          Hello, <span className="text-orange">Abdul Rehman</span>
        </h1>
      </div>
      <br></br>
      <div className="flex items-center mobile:flex-col tabletOnly:flex-col">
        <div>
          <div className="h-[250px] w-[100%] bg-white shadow-inset shadow-2xl rounded-xl mobile:w-[100%]">
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
          <div className="h-[250px] w-[100%] bg-white rounded-xl shadow-inset shadow-2xl mobile:w-[100%]">
            <h3 className="pl-7 py-3 font-semibold">Further Information</h3>
            <hr></hr>
            <br></br>
            <div className="pl-8 pr-24 mobile:pr-8 tabletOnly:pr-8 mobile:pl-3">
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
        <div className="flex ml-40 mobile:ml-0 mobile:mr-24 tabletOnly:ml-0 tabletOnly:hidden ">
          <div className="border-r-2 h-[350px]"></div>
          <div className="flex flex-col pl-4">
            <h1 className="text-xl font-bold">Heading 1</h1>
            <p className="text-lg mb-4">Some text after heading 1.</p>
            <h2 className="text-xl font-bold ">Heading 2</h2>
            <p className="text-lg mb-4">Some text after heading 2.</p>
            <h3 className="text-xl font-bold ">Heading 3</h3>
            <p className="text-lg mb-4">Some text after heading 3.</p>
            <h4 className="text-xl font-bold ">Heading 4</h4>
            <p className="text-lg mb-4">Some text after heading 4.</p>
            <h5 className="text-xl font-bold ">Heading 5</h5>
            <p className="text-lg">Some text after heading 5.</p>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default IndividualProfile;
