/* eslint-disable prettier/prettier */
import React from "react";
import Button from "../../components/Button";
import { useParams } from "react-router";
import { useIndividualMemberDetail } from "../../hooks/useRepresentativeData";
import Loader from "../../components/Loader";

const IndividualMemberDetail = () => {
  const params = useParams();
  const memberId = params.id as string;
  console.log(
    "🚀 ~ file: IndividualMemberDetail.tsx:9 ~ IndividualMemberDetail ~ memberId:",
    memberId
  );

  const { isLoading, data, isError, error }: any =
    useIndividualMemberDetail(memberId);
  console.log(
    "🚀 ~ file: IndividualMemberDetail.tsx:13 ~ IndividualMemberDetail ~ data:",
    data?.data?.member
  );
  if (isLoading) {
    return <Loader />;
  }

  const member = data?.data?.member;
  console.log(
    "🚀 ~ file: IndividualMemberDetail.tsx:27 ~ IndividualMemberDetail ~ member:",
    member
  );

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
            <h2 className="text-xl font-normal mb-2"> First Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.firstName}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Middle Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {" "}
              {member.middleName}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Last Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.lastName}
            </p>
          </div>
        </div>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Account Status:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.accountStatus}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.email}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Nationality:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.nationality}
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Country of Residence:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.countryOfResidence}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Address:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {" "}
              {member.address}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Zip Code:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.zipCode}
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Home Phone Number:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.homePhoneNumber}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Cell Number:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {" "}
              {member.cellNumber}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.email}
            </p>
          </div>
        </div> */}
        {/* <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Identity Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.identityCheck}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Identity:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {" "}
              {member.identity}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Country Of Issuance:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.countryOfIssuance}
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Place Of Issuance:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.placedIssuance}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Date Of Issuance:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {" "}
              {member.dateOfIssuance}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Expiry Date:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member.expiryDate}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default IndividualMemberDetail;
