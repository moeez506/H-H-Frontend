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
    <div className="flex items-center justify-between h-full flex-col text-center mt-10 mx-auto">
      <h1 className='text-4xl text-orange font-bold'>Welcome to<br></br>Holding Hands Community Network</h1>
        <br></br>
        <br></br>
        <h3 className='text-2xl'>Thanks for onboarding in our organization</h3>
        <br></br>
        <br></br>
        <h3 className='text-xl'>Click below to pay the dues</h3>
      <PayPal className="" am="5000" contextData={context} />
    </div>
  );
}
