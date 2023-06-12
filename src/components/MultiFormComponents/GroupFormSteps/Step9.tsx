/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";
import PayPal from "../../PayPal";
import TermsAndConditions from "../../TermsAndConditions";
import BankDetails from "../../BankDetails";

interface Step9Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

export default function step9({ currentStep, handleNextStep }: Step9Props) {
  const context = useContext(GroupUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBank, setIsOpenBank] = useState(false);

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
          // onClick={handleSubmit}
          className={
            " ml-2 border-[1px] w-52 rounded hover:bg-gray-200  text-black border-black bg-grey px-8 py-2 text-xl font-medium"
          }
        >
          MTN/Orange
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
