/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { createKin, updateIndividualAdmin } from "../../../apis/individualOndoarding";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
import PayPal from "../../PayPal";
// import PayPal from "../../PayPal";

interface Step8Props {
    currentStep: number;
    handleNextStep: (step: number) => void;
}

export default function Step8({ currentStep, handleNextStep }: Step8Props) {
    const context = useContext(IndividualUserContext);
    const { kinInformation, individualAdmin } = context;

    console.log("🚀 ~ file: Step8.tsx:13 ~ step8 ~ context:", context)



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
