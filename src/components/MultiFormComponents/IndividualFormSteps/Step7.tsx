/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { createKin, updateIndividualAdmin } from "../../../apis/individualOndoarding";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
import PayPal from "../../PayPal";
// import PayPal from "../../PayPal";

interface Step7Props {
    currentStep: number;
    handleNextStep: (step: number) => void;
}

export default function step7({ currentStep, handleNextStep }: Step7Props) {
    const context = useContext(IndividualUserContext);
    const { kinInformation, individualAdmin } = context;

    console.log("🚀 ~ file: Step7.tsx:13 ~ step7 ~ context:", context)
    const onClick = () => {
        void createKin(kinInformation);
        void updateIndividualAdmin(individualAdmin);
    }



    return (
        <div className="flex items-center justify-between">
            <button
                type="submit"
                onClick={onClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:w-auto mr-3"
            >
                Pay now
            </button>
            <PayPal className="" am="2" contextData={context} />
        </div>
    );
}
