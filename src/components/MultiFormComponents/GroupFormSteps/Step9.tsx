/* eslint-disable prettier/prettier */
import React from "react";

interface Step9Props {
  currentStep: number;
  handleNextStep: (step: number) => void;
}

export default function step9({ currentStep, handleNextStep }: Step9Props) {
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
