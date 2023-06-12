/* eslint-disable prettier/prettier */
import React from "react";
import "./index.css";
import { useRepresentiveData } from "../../hooks/useRepresentativeData";
import Loader from "../../components/Loader";

const IndividualProfile = () => {
  const { isLoading, data, isError, error }: any = useRepresentiveData();
  // console.log("🚀 ~ file: IndividualProfile.tsx:9 ~ IndividualProfile ~ data:", data)

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const {
    firstName,
    email,
    lastName,
    dateOfBirth,
    nationality,
    phoneNumbers,
    address,
    zipCode,
    isVerified,
    countryOfResidence,
    identification,
    placeOfBirth,
  } = data?.data?.user;

  // const name = firstName + ' ' + lastName;

  return (
    <div className="flex flex-col ml-20 mobile:ml-0 tabletOnly:ml-0">
      {/* <div className="h-full w-full bg-white rounded-xl shadow-inset shadow-2xl p-10 tabletOnly:w-full mobile:p-3"> */}
      <div>
        <h1 className="text-4xl font-semibold">
          Hello,{" "}
          <span className="text-orange">
            {firstName} {lastName}
          </span>
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
                <p className="pl-16">{firstName}</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Email:</h3>
                <p className="pl-16">{email}</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Contact:</h3>
                <p className="pl-12">{phoneNumbers.Cell}</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Account Status:</h3>
                <p className="pl-14">{isVerified ? "Verified" : "Pending"}</p>
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
                <p className="pl-16">{address}</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Zip Code:</h3>
                <p className="pl-16">{zipCode}</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Nationality:</h3>
                <p className="pl-10">{nationality}</p>
              </div>
              <div className="flex mt-2">
                <h3 className="text-orange font-bold">Date of Birth:</h3>
                <p className="pl-8">{dateOfBirth}</p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="flex ml-40 mobile:ml-0 mobile:mr-24 tabletOnly:ml-0 tabletOnly:hidden ">
          <div className="border-r-2 h-[350px]"></div>
          <div className="flex flex-col pl-4">
            <h1 className="text-xl font-bold text-orange">
              Country of Residence
            </h1>
            <p className="text-lg mb-4">{countryOfResidence}</p>
            <h2 className="text-xl font-bold text-orange">
              Country of Issuance
            </h2>
            <p className="text-lg mb-4 ">{identification.countryOfIssuance}</p>
            <h3 className="text-xl font-bold text-orange">Date of Issuance</h3>
            <p className="text-lg mb-4">{identification.dateOfIssuance}</p>
            <h4 className="text-xl font-bold text-orange">Place of Issuance</h4>
            <p className="text-lg mb-4">{identification.placedIssuance}</p>
            <h5 className="text-xl font-bold text-orange">Expiry Date</h5>
            <p className="text-lg">{identification.expiryDate}</p>
          </div>
        </div>
      </div>
      <h1 className="text-xl mt-4 font-semibold p-4">
        Eligibility For Programs:
      </h1>
      <div className="flex flex-row mobile:flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
          <h2 className="text-orange text-xl font-semibold mb-2">
            Death Relief Support Funding:
          </h2>
          <p className="text-gray-500 text-base mobile:pt-1">Eligible</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
          <h2 className="text-orange text-xl font-semibold mb-2">
            Critical Health Support Funding:
          </h2>
          <p className="text-gray-500 text-base mobile:pt-1">Eligible</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
          <h2 className="text-orange text-xl font-semibold mb-2">
            Educational Support Funding:
          </h2>
          <p className="text-gray-500 text-base mobile:pt-1">Eligible</p>
        </div>
        <div className=" w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
          <h2 className="text-orange text-xl font-semibold mb-2">
            Market Place Listings Program:
          </h2>
          <p className="text-gray-500 text-base mobile:pt-1">Eligible</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualProfile;
