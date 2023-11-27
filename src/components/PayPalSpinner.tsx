/* eslint-disable prettier/prettier */
import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React from "react";
import Loader from "./Loader";

const PayPalSpinner = () => {
  const [{ isResolved }] = usePayPalScriptReducer();

  return !isResolved ? <Loader /> : null;
};

export default PayPalSpinner;
