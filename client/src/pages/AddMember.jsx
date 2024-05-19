import React from 'react'
import Button from "../components/Button";

const AddMember = () => {
  return (
          <div className="w-full h-screen absolute flex items-center justify-center ">
      <div className="border border-black w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 flex flex-col rounded-lg px-4 py-3 gap-1 ">
        <h3 className="text-center text-3xl font-bold">ADDMEMBER</h3>
        <label htmlFor="name" className="flex flex-col gap-1 font-medium">
          Names
          <input
            type="text"
            name="name"
            id="name"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            required
            />
        </label>
        <label htmlFor="email" className="flex flex-col gap-1 font-medium">
          Email
          <input
            type="email"
            name="name"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            required
          />
        </label>
        <label htmlFor="dateOfBirth" className="flex flex-col gap-1 font-medium">
          Place Of Birth
          <input
            type="text"
            name="name"
            id="dateOfBirth"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            required
            />
        </label>
        <label htmlFor="placeOfResidence" className="flex flex-col gap-1 font-medium">
          Place Of Residence
          <input
            type="text"
            name="name"
            id="placeOfResidence"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            required
            />
        </label>
        <label htmlFor="phoneNumber" className="flex flex-col gap-1 font-medium">
          Phone Number
          <input
            type="text"
            name="name"
            id="phoneNumber"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            required
            />
        </label>
          <div className="flex flex-row justify-center mt-2">
          <Button label={"ADD"} outline={"black"} />
        </div>
      </div>
    </div>
  )
}

export default AddMember