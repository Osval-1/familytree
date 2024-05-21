import React, { useState, useEffect, useContext } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { postApi } from "../services/dataApi";

const AddMember = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [placeOfResidence, setPlaceOfResidence] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    logout()
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
  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };
  const handlePlaceOfResidenceChange = (e) => {
    setPlaceOfResidence(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const addMemberApi = async () => {
    if (!email | !userName | !placeOfResidence | !dateOfBirth | !phone) {
      setError(true);
      setMessage("please fill out all fields in the form");
     return
    }
    const { response, userData } = await postApi(
      "http://localhost:8000/genealogy/add-member",
      {
        email: email,
        name: userName,
        placeOfResidence: placeOfResidence,
        dateOfBirth: dateOfBirth,
        phone: phone,
      }
    );
    if (!response.ok) {
      setError(true);
      setMessage(userData.message);
      return;
    }
    navigate("/MembersTable");
    console.log(response, userData);
  };

  return (
    <div className="w-screen h-screen absolute flex flex-col border items-center justify-center py-12 sm:py-8 overflow-hidden">
      {error && <ErrorMessage message={message} />}
      <div className="border border-black w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 flex flex-col rounded-lg px-4 py-6 gap-2">
        <h3 className="text-center text-3xl font-bold">ADD MEMBER</h3>
        <label htmlFor="name" className="flex flex-col gap-1 font-medium">
          Names
          <input
            type="text"
            name="name"
            id="name"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={userName}
            onChange={(value) => handleNameChange(value)}
            required
          />
        </label>
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
        <label
          htmlFor="dateOfBirth"
          className="flex flex-col gap-1 font-medium"
        >
          date Of Birth
          <input
            type="text"
            name="dateOfBirth"
            id="dateOfBirth"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={dateOfBirth}
            onChange={(value) => handleDateOfBirthChange(value)}
            required
          />
        </label>
        <label
          htmlFor="placeOfResidence"
          className="flex flex-col gap-1 font-medium"
        >
          Place Of Residence
          <input
            type="text"
            name="placeOfResidence"
            id="placeOfResidence"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={placeOfResidence}
            onChange={(value) => handlePlaceOfResidenceChange(value)}
            required
          />
        </label>
        <label
          htmlFor="phoneNumber"
          className="flex flex-col gap-1 font-medium"
        >
          Phone Number
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={phone}
            onChange={(value) => handlePhoneChange(value)}
            required
          />
        </label>
        <div className="flex flex-row justify-center mt-2">
          <Button label={"ADD"} outline={"black"} onclick={addMemberApi} />
        </div>
      </div>
    </div>
  );
};

export default AddMember;
