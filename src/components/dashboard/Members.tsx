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
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Loader from "../Loader";
import { useMemberData } from "../../hooks/useRepresentativeData";
interface Member {
  registrationNumber: string;
  name: string;
  email: string;
  status: string;
}

const getRowId = (member: Member) => member.registrationNumber;

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
  const members: Member[] = [
    {
      registrationNumber: "001",
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      registrationNumber: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      registrationNumber: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      registrationNumber: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      registrationNumber: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      registrationNumber: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      registrationNumber: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      registrationNumber: "002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },

    // Add more member objects as needed
  ];



  const renderMember = ()=>{
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
                <BsEye className="text-blue-500" onClick={renderMember} />
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
          rows={members}
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
