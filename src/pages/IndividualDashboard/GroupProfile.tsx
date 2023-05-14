/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React from 'react'
import { useGroupDetail, useGroupMember } from '../../hooks/useRepresentativeData';
import Loader from '../../components/Loader';
import { NavLink } from 'react-router-dom';

const GroupProfile = () => {
  const user = JSON.parse(localStorage.getItem('login-user') ?? '{}')
  const { isLoading, data, isError, error }: any = useGroupDetail(user.groupId);
  const { isLoading: isLoading1, data: data1, isError: isError1, error: error1 }: any = useGroupMember(user.groupId);
  // console.log("🚀 ~ file: GroupProfile.tsx:10 ~ GroupProfile ~ error1:", error1)
  console.log("🚀 ~ file: GroupProfile.tsx:10 ~ GroupProfile ~ data:", data)
  console.log("🚀 ~ file: GroupProfile.tsx:8 ~ GroupProfile ~ data1:", data1)
  if (isLoading1) {
    return <Loader />
  }
  const { address, associationName, country, email, registeredMembers, websiteLink, zipCode } = data?.data
  const memberData = data1?.data?.groupUsers
  console.log("🚀 ~ file: GroupProfile.tsx:18 ~ GroupProfile ~ memberData:", memberData)
  const representativeData = memberData.filter((member: any) => member.isGroupRespresentative);
  console.log("🚀 ~ file: GroupProfile.tsx:19 ~ GroupProfile ~ representativeData:", representativeData)
  return (
    <div>
      <h1 className="text-4xl font-semibold">
        Hello, name
      </h1>
      <br></br>
      <div className='shadow-inset shadow-2xl rounded-xl'>
        <h1 className='text-xl font-semibold p-4'>Group Detail</h1>
        {/* <br></br> */}
        <hr></hr>
        <br></br>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">associationName</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">test@gmail.com</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Contact:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
          </div>
        </div>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">Abdul Rehman</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">test@gmail.com</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-orange text-xl font-semibold mb-2">Contact:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
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
                <p className="text-gray-500 text-base mobile:pt-1">{`${data.firstName} ${data.lastName}`}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-1">Email:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">{data.email}</p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 my-2 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-1">Contact:</h2>
                <p className="text-gray-500 text-base mobile:pt-1">555 555 555</p>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default GroupProfile