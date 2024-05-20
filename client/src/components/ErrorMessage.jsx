import React from "react";

const ErrorMessage = ({ type, message }) => {
  return (
    <div
      className=" w-auto mb-2 px-4 py-1 rounded-sm text-white text-sm" 
      style={{ backgroundColor: type == "error" ? "red" : "limegreen" }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
