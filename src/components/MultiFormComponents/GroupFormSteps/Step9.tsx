/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";
import PayPal from "../../PayPal";

interface Step9Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

export default function step9({ currentStep, handleNextStep }: Step9Props) {
  const context = useContext(GroupUserContext);

  return (
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:w-auto mr-3"
      >
        Pay now
      </button>
      <PayPal className="" am="2" contextData={context} />
    </div>
  );
}
