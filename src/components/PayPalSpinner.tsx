/* eslint-disable prettier/prettier */
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React from "react";

const PayPalSpinner = () => {
  const [{ isResolved }] = usePayPalScriptReducer();

  return !isResolved ? <div>Loading</div> : null;
};

export default PayPalSpinner;
