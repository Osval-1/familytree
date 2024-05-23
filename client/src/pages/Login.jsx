import React, { useState, useEffect, useContext } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import { loginApi } from "../services/authenticationApi";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const {token,setToken} = useContext(AuthContext)

  useEffect(()=>{
    const timeout = setTimeout(
     ()=>{
       setError(false)
     },3000
    )
    return ()=>clearTimeout(timeout)
   },[message,error])

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const Login = async () => {
    if (!email | !password) {
      setError(true);
      setMessage("please fill out all fields in the form");
      return console.log("please fill out all fields in the form");
    }
    const { response, userData } = await loginApi(
      "http://localhost:8000/auth/login",
      {
        email: email,
        password: password,
      }
    );
    if (!response.ok) {
      setError(true);
      setMessage(userData.message);
      return;
    }
    const jwttoken = userData.jwttoken
    setToken(jwttoken)
    localStorage.setItem("token",jwttoken)
    navigate("/MembersTable")
  };
  return (
    <div className="w-screen h-screen flex flex-col border items-center justify-center py-12 sm:py-8 overflow-hidden">
      {error && <ErrorMessage message={message} />}
      <div className="border border-black w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 flex flex-col rounded-lg px-4 py-6 gap-2">
        <h3 className="text-center text-3xl font-bold">LOGIN</h3>
        <label htmlFor="email" className="flex flex-col gap-1 font-medium">
          Email
          <input
            type="email"
            name="email"
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
          <Button label={"LOGIN"} outline="black" onclick={Login} />
        </div>
      </div>
    </div>
  );
};

export default Login;
