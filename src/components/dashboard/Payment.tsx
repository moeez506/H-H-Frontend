/* eslint-disable prettier/prettier */
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import HeadPayment from "./components/HeadPayment";
import { useMediaQuery } from "@mui/material";
import Loader from "../Loader";
import { useDashboardPayment } from "../../hooks/useDashboardData";
import { useGroupPayment } from "../../hooks/useRepresentativeData";
import { getUserFromLocalStorage } from "../../utils/getUserFromLocalStorage";
interface Member {
  transactionId: string;
  // email: string;
  amount: string;
  // dateTime: string;
}
const getRowId = (payment: Member) => payment.transactionId;

const PaymentDashBoard: React.FC = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const user = getUserFromLocalStorage();


  // if (user.isGroupAdmin) {
  //   var { isLoading: isLoading1, data: data1, isError: isError1, error: error1 }: any = useGroupPayment(user.groupId);
  //   var paymentData = data1?.data; 
  // }else{
  //   var { isLoading, data, isError, error }: any = useDashboardPayment();
  //   var paymentData = data?.data; 
  // }

  const { isLoading, data, isError, error }: any = user.isGroupAdmin
    ? useGroupPayment(user.groupId)
    : useDashboardPayment();

  const paymentData = data?.data;
  console.log("🚀 ~ file: Payment.tsx:34 ~ paymentData:", paymentData)


  if (isLoading) {
    return <Loader />;
  }


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
        field: "paymentReason",
        headerName: "Reason",
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
        field: "email",
        headerName: "Payyer Mail",
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
      <div className="ml-20 mobile:ml-0">
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
