/* eslint-disable prettier/prettier */
import React from "react";


interface errorProp {
  error: string | undefined
}
const ApiError = ({ error }: errorProp) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">Error! </span>
      {error}
    </div>
  );
};

export default ApiError;
