import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import { signupApi } from "../services/authenticationApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Does this work");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  
  useEffect(()=>{
    const timeout = setTimeout(
     ()=>{
       setError(false)
     },3000
    )
    return ()=>clearTimeout(timeout)
   },[message,error])

  const handleNamesChange = (e) => {
    setUserName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const Signup = async () => {
    if (!userName | !email | !password) {
      setError(true);
      setMessage("please fill out all fields in the form")
      return console.log("please fill out all fields in the form");
    }
    const { response, userData } = await signupApi(
      "http://localhost:8000/auth/signup",
      {
        name: userName,
        email: email,
        password: password,
      }
    );
    if (!response.ok) {
      setError(true);
      setMessage(userData.message);
      return;
    }
    navigate("/login");
  };

  return (
    <div className="w-full h-screen absolute flex flex-col justify-center items-center py-8 sm:py-4 overflow-hidden">
      {error && <ErrorMessage message={message} />}
      <div className="border border-black w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 flex flex-col rounded-lg px-4 py-3 gap-1 ">
        <h3 className="text-center text-3xl font-bold">SIGNUP</h3>
        <label htmlFor="name" className="flex flex-col gap-1 font-medium">
          Names
          <input
            type="text"
            name="name"
            id="name"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={userName}
            onChange={(value) => handleNamesChange(value)}
            required
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-1 font-medium">
          Email
          <input
            type="email"
            name="name"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={email}
            onChange={(value) => handleEmailChange(value)}
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
            value={password}
            onChange={(value) => handlePasswordChange(value)}
            required
          />
        </label>
        <div className="flex flex-row justify-center mt-2">
          <Button label={"SIGNUP"} outline={"black"} onclick={Signup} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
