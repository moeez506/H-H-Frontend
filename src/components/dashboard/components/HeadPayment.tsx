import React, { useState } from "react";
import { Link } from "react-router-dom";
// import cx from "classnames";

interface PaymentProps {
  total: number;
  value: number;
  paid: boolean;
}

function HeadPayment() {
  const [totalAmt, setTotalAmt] = useState("$1200");
  const [duePayment, setDuePayment] = useState("$1400");
  const [referalBalance, setReferalBalance] = useState("1200");

  return (
    <>
      <div className="flex justify-between pl-48 mobile:pl-4 tabletOnly:pl-4  py-4 border-b border-gray-300 bg-slate-300 rounded-2xl mb-4">
        <div className="flex-1">
          <p className="font-bold text-orange">Total Amount</p>
          <p className="text-xl mt-2 mb-2">{totalAmt}</p>
          <p className="">PAID</p>
        </div>
        <div className="flex-1">
          <p className="font-bold text-orange">Due Payment</p>
          <p className="text-xl  mt-2 mb-2">{duePayment}</p>
          <p className="">Due Date</p>
        </div>
        <div className="flex-1">
          <p className="font-bold text-orange">Referal Balance</p>
          <p className="text-xl  mt-2 mb-2">{referalBalance}</p>
          <button className="bg-orange text-white px-4 py-2  rounded-2xl   mobile:text-sm mobile:px-1 mobile:py-1 mobile:mr-2 tabletOnly:mr-2  ">
            Withdraw Balance
          </button>{" "}
        </div>
      </div>

      <div className="ml-4 mb-2 font-bold">
        <h1>Payment History</h1>
      </div>
    </>
  );
}
export default HeadPayment;
