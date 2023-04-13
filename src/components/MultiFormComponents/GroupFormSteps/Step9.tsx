/* eslint-disable prettier/prettier */
import React, { useContext, useState } from "react";
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";
import PayPal from "../../PayPal";
import TermsAndConditions from "../../TermsAndConditions";

interface Step9Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

export default function step9({ currentStep, handleNextStep }: Step9Props) {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(GroupUserContext);

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
      <h3 className="text-xl">Click below to pay the dues</h3>
      <PayPal className="" am="5000" contextData={context} />
    </div>
  );
}
