/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { GroupUserContext } from "../../contexts/groupOnboardingContext";
import { IndividualUserContext } from "../../contexts/individualOnboardingContext";
import thankyou from "../../assets/thank-you.png";
import logo from "../../assets/logo-2.png";
export const ThankYou = () => {
  const USercontext = useContext(IndividualUserContext);
  console.log(
    "🚀 ~ file: ThankYou.tsx:7 ~ ThankYou ~ USercontext:",
    USercontext
  );
  // const context = useContext(GroupUserContext)
  // console.log("🚀 ~ file: step8.tsx:36 ~ Step8 ~ context:", context);
  return (
    <section className="flex flex-col justify-center items-center w-full  py-[36px]">
      {/* <figure className="w-[60px] h-[60px]"> */}
      <img
        className="h-72 w-72 tablet:h-52 tablet:w-52"
        src={logo}
        alt="Logo"
      />
      <img
        className="h-24 w-60 tablet:h-14 tablet:w-18"
        src={thankyou}
        alt="Form completed, thank you!"
      />
      {/* </figure> */}
      {/* <h2 className="text-4xl text-orange font-bold" >Thank you</h2> */}
      <span className="text-center">
        <p className="text-2xl">Thanks for confirming your subscription!</p>
        <p className="text-xl">
          We hope you have using our platform. If you ever need support, please
          feel free to <br></br> email us at info@holdinghandscommunity.com
        </p>
      </span>
    </section>
  );
};
