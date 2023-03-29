/* eslint-disable prettier/prettier */
import React from "react";

interface Props {
  value: string;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  id: string;
  name: string;
  type: string;
}

const Input = ({ value, handleBlur, handleChange, id, name, type }: Props) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      name={name}
      type={type}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default Input;
