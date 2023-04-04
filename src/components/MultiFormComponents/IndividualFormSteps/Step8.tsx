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
