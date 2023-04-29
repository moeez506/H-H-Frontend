import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Members.css";
import HeadPayment from "./components/HeadPayment";
import { useMediaQuery } from "@mui/material";
interface Member {
  paymentId: string;
  transaction: string;
  amount: string;
  dateTime: string;
}
const getRowId = (member: Member) => member.paymentId;

const PaymentDashBoard: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const members: Member[] = [
    {
      paymentId: "001",
      transaction: "John Doe",
      amount: "john.doe@example.com",
      dateTime: "Active",
    },
    {
      paymentId: "001",
      transaction: "John Doe",
      amount: "john.doe@example.com",
      dateTime: "Active",
    },
    {
      paymentId: "001",
      transaction: "John Doe",
      amount: "john.doe@example.com",
      dateTime: "Active",
    },
    {
      paymentId: "001",
      transaction: "John Doe",
      amount: "john.doe@example.com",
      dateTime: "Active",
    },
  ];

  const columns = !isSmallScreen
    ? [
        {
          field: "paymentId",
          headerName: "Payment ID",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "transaction",
          headerName: "Transaction",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "amount",
          headerName: "Amount",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "dateTime",
          headerName: "Date Time",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
      ]
    : [
        {
          field: "transaction",
          headerName: "Transaction",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "amount",
          headerName: "Amount",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
        {
          field: "dateTime",
          headerName: "Date Time",
          flex: 1,
          headerClassName: "my-header-background my-header-text-color",
        },
      ];
  return (
    <>
      <div className="m-8">
        <HeadPayment />
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

export default PaymentDashBoard;
