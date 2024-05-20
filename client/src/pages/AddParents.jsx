import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useNavigate,useParams
 } from "react-router-dom";
import { postApi } from "../services/dataApi";
import ErrorMessage from "../components/ErrorMessage";

const AddParents = () => {
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(true);

  const {id} = useParams()

  const handleFatherChange = (e) => {
    setFather(e.target.value);
  };
  const handleMotherChange = (e) => {
    setMother(e.target.value);
  };
  const addParentsApi = async () => {
    if (!father | !mother) {
      return console.log("please fill out all fields in the form");
    }
    const { response, userData } = await postApi(
      "http://localhost:8000/genealogy/add-parents",

      {
        childId: id,
        father: father,
        mother: mother,
      }
    );

    console.log(response, userData);
  };
  return (
    <div className="w-screen h-screen flex flex-col border items-center justify-center py-12 sm:py-8 overflow-hidden">
      {error && <ErrorMessage message={message} />}
      <div className="border border-black w-3/4 sm:w-2/3 md:w-2/5 lg:w-1/3 flex flex-col rounded-lg px-4 py-6 gap-2">
        <h3 className="text-center text-3xl font-bold">ADD PARENTS</h3>
        <label htmlFor="father" className="flex flex-col gap-1 font-medium">
          Father
          <input
            type="text"
            name="father"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={father}
            onChange={(value) => handleFatherChange(value)}
            required
          />
        </label>
        <label htmlFor="mother" className="flex flex-col gap-1 font-medium">
          Mother
          <input
            type="text"
            name="mother"
            id="mother"
            className="border border-black rounded-sm w-full px-1 outline-none h-8"
            value={mother}
            onChange={(value) => handleMotherChange(value)}
            required
          />
        </label>
        <div className="flex flex-row justify-center mt-2">
          <Button label={"ADD"} outline={"black"} onclick={addParentsApi}/>
        </div>
      </div>
    </div>
  );
};

export default AddParents;
