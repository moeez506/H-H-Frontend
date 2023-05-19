/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useGroupDetail, useGroupMember } from '../../hooks/useRepresentativeData';
import Loader from '../../components/Loader';
import { NavLink } from 'react-router-dom';

const GroupProfile = () => {
  const user = JSON.parse(localStorage.getItem('login-user') ?? '{}')
  const { isLoading: isLoadingDetail, data: groupDetail, isError: isErrorDetail, error: errorDetail } = useGroupDetail(user.groupId);
  const { isLoading: isLoadingMember, data: groupMember, isError: isErrorMember, error: errorMember } = useGroupMember(user.groupId);

  if (isLoadingDetail || isLoadingMember) {
    return <Loader />;
  }

  if (isErrorDetail || isErrorMember) {
    // Todo Error Handling
    // return
    // <div>Error: {errorDetail.message || errorMember.message}</div>;
  }
  const { address, associationName, country, email, registeredMembers, websiteLink, zipCode } = groupDetail?.data

  const memberData = groupMember?.data?.groupUsers
  const representativeData = memberData.filter((member: any) => member.isGroupRespresentative);
  console.log("🚀 ~ file: GroupProfile.tsx:26 ~ GroupProfile ~ representativeData:", representativeData)


  return (
    <div className='ml-28 mobile:ml-0 tabletOnly:ml-14 tabletOnly:w-max tabletScreen:ml-0'>
      <h1 className="text-4xl font-semibold text-orange">
       {associationName}
      </h1>
      <br></br>
      <div className='shadow-inset shadow-2xl rounded-xl w-full'>
        <h1 className='text-xl font-semibold p-4'>Group Detail</h1>
        {/* <br></br> */}
        <hr></hr>
        <br></br>
        <div className="flex flex-row mobile:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Association Name</h2>
            <p className="text-gray-500 text-base mobile:pt-1">{associationName}</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-500 text-base mobile:pt-1">{email}</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Country</h2>
            <p className="text-gray-500 text-base mobile:pt-1">{country}</p>
          </div>
        </div>
        <div className="flex flex-row mobile:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Address:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">{address}</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">ZipCode:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">{zipCode}</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Website:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">{websiteLink}</p>
          </div>
        </div>
      </div>
      <br></br>
      {representativeData.map((data: any, index: any) => {
        return (
          <div key={data._id} className='shadow-inset shadow-xl rounded-xl mb-4'>
            <div className='flex justify-between p-2'>
              <h1 className='text-xl font-semibold'>Representative {Number(index) + 1}</h1>
              <NavLink to={`/individual-Detail/${data._id as string}`} className="text-orange text-base pr-4 hover:underline" >View Detail</NavLink>
            </div>

            <hr></hr>
            {/* <br></br> */}
            <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-1">Name:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{data.firstName} {data.lastName}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-1">Email:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{data.email}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-1">Contact:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{data.phoneNumbers.Cell}</p>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default GroupProfile