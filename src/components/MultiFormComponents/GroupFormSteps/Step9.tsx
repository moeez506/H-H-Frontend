/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";

interface Step9Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}



export default function step9({ currentStep, handleNextStep }: Step9Props) {
  const context = useContext(GroupUserContext)
  console.log("🚀 ~ file: Step9.tsx:11 ~ context:", context)
  return (
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:w-auto"
      >
        Pay now
      </button>
    </div>
  );
}
