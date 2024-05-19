import React from "react";

const Button = ({ onclick, label, outline = "white" }) => {
  return (
    <>
      {outline == "white" ? (
        <div
          onClick={onclick}
          className="p-2 text-center bg-none w-32 text-white rounded-md border-2 border-white cursor-pointer hover:bg-white hover:text-black"
        >
          {label}
        </div>
      ) : (
        <div
          onClick={onclick}
          className="p-2 text-center bg-none w-32 text-black rounded-md border-2 border-black cursor-pointer hover:bg-black hover:text-white"
        >
          {label}
        </div>
      )}
    </>
  );
};

export default Button;
