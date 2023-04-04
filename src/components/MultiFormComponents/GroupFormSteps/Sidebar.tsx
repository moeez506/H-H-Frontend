/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useRef } from "react";
import { GroupUserContext } from "../../../contexts/groupOnboardingContext";
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
  const context = useContext(GroupUserContext);
  const getOnTop = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (context !== undefined) {
      getOnTop.current?.scrollIntoView({ behavior: "smooth" });
    }
  });

  const saveToLocalStorage = (boardingData: any) => {
    localStorage.setItem("boardingDataGroup", JSON.stringify(boardingData));
  };

  const handleClick = () => {
    saveToLocalStorage(context);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("boardingDataGroup") ?? "{}");

    context.setCameroonian(data.cameroonian ?? {});
    context.setCreateGroup(data.createGroup ?? {});
    context.setRepresentativeOne(data.representativeOne ?? {});
    context.setRepresentativeTwo(data.representativeTwo ?? {});
    context.setRepresentativeThree(data.representativeThree ?? {});
  }, []);

  return (
    <>
      <div ref={getOnTop} className="bg-sky-800 ">
        <div className="flex justify-end mt-4 ">
          <button
            className=" mr-10 rounded-lg text-white  bg-gradient-to-r from-orange to-yellow px-2 py-1 text-md w-36 md:text-lg font-bold"
            onClick={handleClick}
          >
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
                    ? "bg-white text-black border-black border-primary-light-blue"
                    : "text-white"
                )}
                key={step.step}
              >
                <span
                  className={clsx(
                    " lg:inline text-white uppercase",
                    currentStep === step.step ? "text-black" : ""
                  )}
                >
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
