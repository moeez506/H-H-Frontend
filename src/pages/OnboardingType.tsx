/* eslint-disable prettier/prettier */
import React from "react";
import Button from "../components/Button";

const OnboardingType = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl text-orange font-bold">
        Welcome to<br></br>Holding Hands Community Network
      </h1>
      <br></br>
      <br></br>
      <h3 className="text-2xl">Thanks for registering in our organization</h3>
      <br></br>
      <br></br>
      <div className="flex justify-center items-center mobile:flex-col">
        <div className="flex justify-center items-center flex-col mx-10">
          <h3 className="text-xl">
            If you want join as a group then click on <br></br>the button below
          </h3>
          <br></br>
          <Button text="Join as Group" route="/group-onboarding" />
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-center items-center flex-col mx-10">
          <h3 className="text-xl">
            If you want join as an Individual then click on <br></br>the button
            below
          </h3>
          <br></br>
          <Button text="Join as Individual" route="/individual-onboarding" />
        </div>{" "}
        <div className="flex justify-center items-center flex-col mx-10">
          <h3 className="text-xl">Click to go at main page</h3>
          <br></br>
          <Button text="Go Back" route="/home" />
        </div>{" "}
      </div>
    </div>
  );
};

export default OnboardingType;
