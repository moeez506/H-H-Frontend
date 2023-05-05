import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import HeadPayment from "./components/HeadPayment";
import { useMediaQuery } from "@mui/material";
import Loader from "../Loader";
import { useDashboardPayment } from "../../hooks/useDashboardData";
interface Member {
  transactionId: string;
  // email: string;
  amount: string;
  // dateTime: string;
}
const getRowId = (payment: Member) => payment.transactionId;

const PaymentDashBoard: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const { isLoading, data, isError, error }: any = useDashboardPayment();
  console.log("🚀 ~ file: Payment.tsx:19 ~ data:", data?.data);

  if (isLoading) {
    return <Loader />;
  }

  const paymentData = data?.data;
  // const members: Member[] = [
  //   {
  //     paymentId: "001",
  //     transaction: "John Doe",
  //     amount: "john.doe@example.com",
  //     dateTime: "Active",
  //   },
  //   {
  //     paymentId: "001",
  //     transaction: "John Doe",
  //     amount: "john.doe@example.com",
  //     dateTime: "Active",
  //   },
  //   {
  //     paymentId: "001",
  //     transaction: "John Doe",
  //     amount: "john.doe@example.com",
  //     dateTime: "Active",
  //   },
  //   {
  //     paymentId: "001",
  //     transaction: "John Doe",
  //     amount: "john.doe@example.com",
  //     dateTime: "Active",
  //   },
  // ];

  const columns = !isSmallScreen
    ? [
        {
          field: "transactionId",
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
          field: "transactionId",
          headerName: "Payment ID",
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
          rows={paymentData}
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
