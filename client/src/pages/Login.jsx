import React from "react";
import Button from "../components/Button";
const Login = () => {
  return (
    <div className="w-screen h-screen flex  border items-center justify-center py-12 sm:py-8 overflow-hidden">
      <div className="border border-black w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 flex flex-col rounded-lg px-4 py-6 gap-2">
        <h3 className="text-center text-3xl font-bold">LOGIN</h3>
        <label htmlFor="email" className="flex flex-col gap-1 font-medium">
          Email
          <input
            type="text"
            name="name"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            required
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-1 font-medium">
          Password
          <input
            type="password"
            name="password"
            id="password"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            required
          />
        </label>
        <div className="flex flex-row justify-center mt-2">
          <Button label={"LOGIN"} outline="black" />
        </div>
      </div>
    </div>
  );
};

export default Login;
