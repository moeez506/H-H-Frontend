/* eslint-disable prettier/prettier */
import React from "react";

interface buttonProp {
  text: string;
  isForm?: boolean; // Making the block size button for the forms
  onClick?: () => void; // For Go Back
}
const Button = ({ text, onClick, isForm = false }: buttonProp) => {
  return (
    <button
      onClick={onClick}
      className={
        isForm
          ? "w-full border-4 rounded-xl text-white border-white bg-gradient-to-r from-orange to-yellow px-8 py-2 text-xl font-medium"
          : "border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-8 py-2 text-xl font-medium"
      }
    >
      {text}
    </button>
  );
};

export default Button;
