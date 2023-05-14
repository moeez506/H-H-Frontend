/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Loader from "../Loader";
// import {
//   useMemberData,
//   useMemberDelete,
// } from "../../hooks/useRepresentativeData";
// import { IndividualMemberDetail } from "../../pages";
import { useGroupMember, useMemberData } from "../../hooks/useRepresentativeData";
import { deleteGroupMember, deleteMember } from "../../apis/individualOndoarding";
import ApiSuccess from "../ApiSuccess";

interface Member {
  _id: string;
  firstName: string;
  email: string;
  accountStatus: string;
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
  const [apiLoading, setApiLoading] = useState<boolean>(false);
  console.log("🚀 ~ file: Members.tsx:47 ~ apiLoading:", apiLoading);
  const [apiSuccess, setApiSuccess] = useState<string>();
  console.log("🚀 ~ file: Members.tsx:49 ~ apiSuccess:", apiSuccess);
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint to your desired screen size

  //   const user = JSON.parse(localStorage.getItem('login-user') ?? '{}')
  // let memberData
  //   if (user.isGroupAdmin) {
  //     var { isLoading: isLoading1, data: data1, isError: isError1, error: error1 }: any = useGroupMember(user.groupId);
  //     const groupMember = data1?.data?.groupUsers;
  //     console.log("🚀 ~ file: Members.tsx:57 ~ groupMember:", groupMember)
  //     if (groupMember) {
  //       memberData = groupMember.filter((member: any) => !member.isGroupRespresentative);
  //       console.log("🚀 ~ file: Members.tsx:59 ~ memberData:", memberData)
  //     }

  //   } else {
  //     var { isLoading, data, isError, error }: any = useMemberData();
  //     memberData = data?.data?.individualMembers;
  //   }

  const user = JSON.parse(localStorage.getItem('login-user') ?? '{}');

  const { isLoading, data, isError, error } = user.isGroupAdmin
    ? useGroupMember(user.groupId)
    : useMemberData();

  let memberData = data?.data?.[user.isGroupAdmin ? 'groupUsers' : 'individualMembers'];
  if (user.isGroupAdmin) {
    memberData = memberData?.filter((member: any) => !member.isGroupRespresentative);
  }
  console.log("🚀 ~ file: Members.tsx:76 ~ memberData:", memberData)

  if (isLoading) {
    return <Loader />;
  }
  if (apiLoading) {
    return <Loader />;
  }


  //

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
  // {apiSuccess ? <ApiSuccess success={apiSuccess} /> : null}
  const columns = !isSmallScreen
    ? [
      {
        field: "_id",
        headerName: "Registration Number",
        flex: 1,
        headerClassName: "my-header-background my-header-text-color",
      },
      {
        field: "firstName",
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
        field: "accountStatus",
        headerName: "Status",
        flex: 1,
        renderCell: (params: GridCellParams) => {
          const memberData = params.row;

          return (
            <div className="flex justify-center items-center space-x-2">
              {memberData.accountStatus === "active" ? (
                <BsCheckCircle className="text-green-500" />
              ) : (
                <BsXCircle className="text-red-500" />
              )}
              <span>{memberData.accountStatus}</span>
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
          const memberId = member._id;

          const handleViewClick = () => { };

          const handleEditClick = () => { };

          const handleDeleteClick = async (memberId: any) => {
            setApiLoading(true);
            if (user.isGroupAdmin) {
              try {
                console.log("check")
                await deleteGroupMember(memberId)
                setApiSuccess("Member deleted successfully");
                setApiLoading(false)
              } catch (error) {
                setApiSuccess("Failed to delete member");
              }
            } else {
              try {
                await deleteMember(memberId);
                setApiLoading(false)
                setApiSuccess("Member deleted successfully");
              } catch (error) {
                setApiSuccess("Failed to delete member");
              }
            }

          };
          return (
            <div className="flex justify-center items-center space-x-2">
              <button onClick={handleViewClick}>
                <NavLink to={`/individual-Detail/${memberId}`}>
                  <BsEye className="text-blue-500" />
                </NavLink>
              </button>

              <NavLink to={"/edit-screen"}>
                <button onClick={handleEditClick}>
                  <BsPerson className="text-yellow-500" />
                </button>
              </NavLink>

              <button
                onClick={() => {
                  void handleDeleteClick(memberId);
                }}
              >
                <BsTrash className="text-red-500" />
              </button>
            </div>
          );
        },
        headerClassName: "my-header-background my-header-text-color",
      },
    ]
    : [
      {
        field: "firstName",
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
          const memberId = member._id;
          const handleDeleteClick = (memberId: any) => {
            console.log("🚀 ~ file: Members.tsx:169 ~ memberId:", memberId);
          };
          return (
            <div className="flex justify-center items-center space-x-2">
              <button>
                <NavLink to={`/individual-Detail/${memberId}`}>
                  <BsEye className="text-blue-500" />
                </NavLink>
              </button>

              <NavLink to={"/edit-screen"}>
                <button>
                  <BsPerson className="text-yellow-500" />
                </button>
              </NavLink>

              <button
                onClick={() => {
                  handleDeleteClick(memberId);
                }}
              >
                <BsTrash className="text-red-500" />
              </button>
            </div>
          );
        },
        headerClassName: "my-header-background my-header-text-color",
      },
    ];

  return (
    <>
      <div className="ml-20 mobile:ml-0">
        {apiSuccess ? <ApiSuccess success={apiSuccess} /> : null}
        <h1 className="text-4xl font-semibold text-orange">Members</h1>
        <br></br>
        <hr></hr>
        <br></br>
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
        {/* </div> */}
      </div>
    </>
  );
};

export default MembersTable;
