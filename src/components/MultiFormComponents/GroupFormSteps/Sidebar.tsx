/* eslint-disable prettier/prettier */
import React from "react";
import clsx from "clsx";
import Button from "../../Button";

interface SidebarProps {
  currentStep: number;
  handleNextStep: (step: number) => void;
}
const steps = [
  {
    step: 1,
    title: "Your Info",
  },
  {
    step: 2,
    title: "Select Plan",
  },
  {
    step: 3,
    title: "Add-ons",
  },
  {
    step: 4,
    title: "Summary",
  },
  {
    step: 5,
    title: "Kin info",
  },
  {
    step: 6,
    title: "Health Status",
  },
  {
    step: 7,
    title: "Representative 3",
  },
  {
    step: 8,
    title: "Representative 3 - Sec-B",
  },
  {
    step: 9,
    title: "Payment",
  },
];
export const SidebarGroup = ({ currentStep, handleNextStep }: SidebarProps) => {
  return (
    <>
      <div className="bg-sky-800 ">
        <div className="flex justify-end mt-4 ">
          <button className=" mr-10 rounded-lg text-white  bg-gradient-to-r from-orange to-yellow px-2 py-1 text-md w-36 md:text-lg font-bold">
            SAVE
          </button>
        </div>
        <aside className="bg-sky-800 bg-sidebar-image-mobile min-h-[172px] bg-cover bg-no-repeat lg:rounded-lg lg:bg-sidebar-image-desktop w-full">
          <nav className="flex flex-wrap justify-center lg:flex-col lg:w-60 lg:mx-auto overflow-x-auto">
            {steps.map((step) => (
              <button
                className={clsx(
                  "px-3 py-2 border border-white inline-flex rounded-full leading-none font-medium w-min h-min transition-colors duration-[400ms] desktop:mt-10 laptop:mt-10 tabletOnly:mt-10 m-3",
                  currentStep === step.step
                    ? "bg-primary-light-blue text-primary-marine-blue border-primary-light-blue"
                    : "text-white"
                )}
                onClick={() => {
                  handleNextStep(step.step);
                }}
                key={step.step}
              >
                <span className=" lg:inline text-white uppercase ">
                  <p className="font-normal"> {step.step}</p>
                  {/* <p className="font-bold text-white">{step.title}</p> */}
                </span>
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
};
