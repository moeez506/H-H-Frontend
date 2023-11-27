/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import {
  createKin,
  updateIndividualAdmin,
} from "../../../apis/individualOndoarding";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
import PayPal from "../../PayPal";
import TermsAndConditions from "../../TermsAndConditions";
import Button from "../../Button";
import BankDetails from "../../BankDetails";
import Square from "../../../assets/Square.png";
import Orange from "../../../assets/Orange.png";
import request from "../../../apis/request";
import axios from "axios";
// import PayPal from "../../PayPal";

interface Step7Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

export default function Step7({ currentStep, handleNextStep }: Step7Props) {
  const context = useContext(IndividualUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBank, setIsOpenBank] = useState(false);

  async function SquarePayment() {
    try {
      console.log("🚀 ~ file: Step7.tsx:30 ~ SquarePayment")
      const result = await axios.post('http://localhost:8000/api/payment/square/pay');
      // const result = await request.post("/payment/square/pay");
      console.log("🚀 ~ file: Step7.tsx:30 ~ SquarePayment ~ result:", result)
      return result
    } catch (error) {
      console.log("🚀 ~ file: Step7.tsx:32 ~ SquarePayment ~ error:", error)

    }

  }

  return (
    <div className="flex items-center justify-between h-full flex-col text-center mt-10 mx-auto">
      <h1 className="text-4xl text-orange font-bold">
        Welcome to<br></br>Holding Hands Community Network
      </h1>
      <br></br>
      <br></br>
      <h3 className="text-2xl">Thanks for onboarding in our organization</h3>
      <br></br>
      <div className="ml-3 text-lg mb-5">
        <label className="font-light">
          Our{" "}
          <button
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Terms and Conditions
          </button>
        </label>
      </div>

      {isOpen && (
        <TermsAndConditions
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isPayment={true}
        />
      )}
      {isOpenBank && (
        <BankDetails isOpen={isOpenBank} setIsOpen={setIsOpenBank} />
      )}
      <h3 className="text-xl">Click below to pay the dues</h3>
      <div className="flex flex-wrap mt-4">
        <PayPal className="" am="5000" contextData={context} />
        <button
          type="submit"
          onClick={() => {
            void SquarePayment();
          }}
          className={
            " ml-2 border-[1px] w-52 rounded hover:bg-gray-200  text-black border-black bg-grey px-8 py-2 text-xl font-medium"
          }
        >
          <img src={Square} alt="Square" className="h-10 object-contain" />
        </button>
        <button
          type="submit"
          // onClick={handleSubmit}
          className={
            " ml-2 border-[1px] w-52 rounded hover:bg-gray-200  text-black border-black bg-grey px-8 py-2 text-xl font-medium"
          }
        >
          <img src={Orange} alt="Orange" className="h-10 object-contain" />
        </button>
        <button
          type="submit"
          onClick={() => {
            setIsOpenBank(true);
          }}
          className={
            "ml-2 border-[1px] w-52 rounded hover:bg-gray-200 text-black border-black bg-grey px-8 py-2 text-xl font-medium"
          }
        >
          Bank Deposit
        </button>
      </div>
    </div>
  );
}
