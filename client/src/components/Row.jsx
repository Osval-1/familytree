import React from "react";

const Row = ({ name, email, phone, dateOfBirth, placeOfResidence,onclick }) => {
  return (
    <div className="border border-black grid grid-cols-5 bg-black/5 gap-y-1 hover:bg-black/20 cursor-pointer" onClick={onclick}>
      <p className="pl-2 border-r border-black text-wrap">{name}</p>
      <p className="pl-2 border-r border-black text-wrap">{email}</p>
      <p className="pl-2 border-r border-black">{phone}</p>
      <p className="pl-2 border-r border-black">{dateOfBirth}</p>
      <p className="pl-2 border-r border-black">{placeOfResidence}</p>
    </div>
  );
};

export default Row;
