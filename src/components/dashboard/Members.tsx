/* eslint-disable prettier/prettier */
import React from "react";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

import "./Members.css";
import {
  BsCheckCircle,
  BsXCircle,
  BsEye,
  BsPerson,
  BsTrash,
} from "react-icons/bs";
import HeadAndSearch from "./components/HeadAndSearchMember";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Loader from "../Loader";
import { useMemberData, useMemberDelete } from "../../hooks/useRepresentativeData";
import { IndividualMemberDetail } from "../../pages";
interface Member {
  _id: string;
  name: string;
  email: string;
  status: string;
}

const getRowId = (memberData: Member) => memberData._id;

const MembersTable: React.FC = () => {
  // const { isLoading, data, isError, error }: any = useDashboardMembers();
  // console.log("🚀 ~ file: Members.tsx:29 ~ error:", error);
  // console.log("🚀 ~ file: Members.tsx:29 ~ isLoading:", isError);

  // if (isLoading) {
  //   return <Loader />;
  // }
  // console.log(data);
  // if (!isError && !isLoading) {
  // }
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint to your desired screen size
  const { isLoading, data, isError, error }: any = useMemberData();
  console.log("🚀 ~ file: Members.tsx:29 ~ data:", data?.data?.individualMembers)

  if (isLoading) {
    return <Loader />;
  }

  const memberData = data?.data?.individualMembers;
  // const { mutate }: any = useMemberDelete();
  //   console.log("🚀 ~ file: Members.tsx:50 ~ deleteMember ~ error:", error)
  //   console.log("🚀 ~ file: Members.tsx:50 ~ deleteMember ~ isError:", isError)
  // console.log("🚀 ~ file: Members.tsx:29 ~ data:", data)

  // if (isLoading) {
  //   return <Loader />;
  // }
  // const deleteMember =() =>{
  //   mutate()
  // }
  // const members: Member[] = [
  //   {
  //     registrationNumber: "001",
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     status: "Active",
  //   },
  //   {
  //     registrationNumber: "002",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     registrationNumber: "002",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     registrationNumber: "002",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     registrationNumber: "002",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     registrationNumber: "002",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     registrationNumber: "002",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },
  //   {
  //     registrationNumber: "002",
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     status: "Inactive",
  //   },

    // Add more member objects as needed
  // ];



  const renderMember = ()=>{
    
    <IndividualMemberDetail />
    console.log("hello")
  }

  const columns = !isSmallScreen
    ? [
        {
          field: "registrationNumber",
          headerName: "Registration Number",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "status",
          headerName: "Status",
          flex: 1,
          renderCell: (params: GridCellParams) => {
            const member = params.row as Member;
            return (
              <div className="flex justify-center items-center space-x-2">
                {member.status === "Active" ? (
                  <BsCheckCircle className="text-green-500" />
                ) : (
                  <BsXCircle className="text-red-500" />
                )}
                <span>{member.status}</span>
              </div>
            );
          },

          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "actions",
          headerName: "Actions",
          flex: 1,
          renderCell: (params: GridCellParams) => {
            const member = params.row as Member;
            return (
              <div className="flex justify-center items-center space-x-2">
                <NavLink to={'/'}>
                <BsEye className="text-blue-500" />
                </NavLink>
                
                <BsPerson className="text-yellow-500" />
                <BsTrash className="text-red-500" />
              </div>
            );
          },
          headerClassName: "my-header-background my-header-text-color",
        },
      ]
    : [
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },

        {
          field: "actions",
          headerName: "Actions",
          flex: 1,
          renderCell: (params: GridCellParams) => {
            const member = params.row as Member;
            return (
              <div className="flex justify-center items-center space-x-2">
                <BsEye className="text-blue-500" />
                <BsPerson className="text-yellow-500" />
                <BsTrash className="text-red-500" />
              </div>
            );
          },
          headerClassName: "my-header-background my-header-text-color",
        },
      ];

  return (
    <>
      <div className="m-8">
        <HeadAndSearch />
        <DataGrid
          columns={columns}
          rows={memberData}
          getRowId={getRowId}
          autoHeight
          disableColumnMenu
          // className=""
          disableRowSelectionOnClick
        />
      </div>
    </>
  );
};

export default MembersTable;
