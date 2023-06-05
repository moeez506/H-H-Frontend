/* eslint-disable prettier/prettier */
import React, { createContext, useContext, useState } from "react";

interface PaymentDataContextType {
  paymentData: any;
  setPaymentData: (data: any) => void;
}

export const PaymentDataContext = createContext<PaymentDataContextType>({
  paymentData: {
    id: "aaaa",
    amount: "123",
  },
  setPaymentData: () => {},
});

export const PaymentDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [paymentData, setPaymentData] = useState<any>([]);

  return (
    <PaymentDataContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </PaymentDataContext.Provider>
  );
};

export const usePaymentData = () => useContext(PaymentDataContext);
