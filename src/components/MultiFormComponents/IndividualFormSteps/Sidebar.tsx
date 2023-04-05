/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useRef } from "react";
import { IndividualUserContext } from "../../../contexts/individualOnboardingContext";
import clsx from "clsx";
import LogoutButton from "../../Logout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    title: "Next Of Kin / Successor information",
  },
  {
    step: 6,
    title: "Health Status",
  },
  {
    step: 7,
    title: "Payment",
  },
];
export const Sidebar = ({ currentStep, handleNextStep }: SidebarProps) => {
  const context = useContext(IndividualUserContext);
  const getOnTop = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (context !== undefined) {
      getOnTop.current?.scrollIntoView({ behavior: "smooth" });
    }
  });
  const saveToLocalStorage = (boardingData: any) => {
    localStorage.setItem(
      "boardingDataIndividual",
      JSON.stringify(boardingData)
    );
  };

  const handleClick = () => {
    saveToLocalStorage(context);
    toast.success("Data saved successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("boardingDataIndividual") ?? "{}"
    );

    context.setSubscriptionPlan(data.subscriptionPlan ?? {});
    context.setCameroonian(data.cameroonian ?? {});
    context.setIndividualAdmin(data.individualAdmin ?? {});
    context.setAdditionalMember(data.additionalMember ?? {});
    context.setKinInformation(data.kinInformation ?? {});
  }, []);
  return (
    <div ref={getOnTop} className="bg-sky-800 ">
      <div className="flex justify-between m-4 mb-0 ">
        <button
          className=" mr-10 rounded-lg text-white  text-xl bg-gradient-to-r from-orange to-yellow px-2 py-1 text-md w-36 md:text-lg font-bold"
          onClick={handleClick}
        >
          SAVE
        </button>
        <LogoutButton />
      </div>
      <aside className="bg-sky-800 bg-sidebar-image-mobile min-h-[172px] bg-cover bg-no-repeat lg:rounded-lg lg:bg-sidebar-image-desktop w-full">
        <nav className="flex flex-wrap justify-center lg:flex-col lg:w-60 lg:mx-auto overflow-x-auto">
          {steps.map((step) => (
            <button
              className={clsx(
                "px-3 py-2 border border-white inline-flex rounded-full leading-none font-medium w-min h-min transition-colors duration-[400ms] mobile:mt-4 mt-10 m-3",
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
        <div className="absolute top-0 right-0 mt-8 mr-4"></div>
      </aside>
    </div>
  );
};
