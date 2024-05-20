import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div
      className=" w-auto bg-red-600 mb-2 px-4 py-1 rounded-sm text-white text-sm" 
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
