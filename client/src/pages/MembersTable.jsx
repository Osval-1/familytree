import React, { useState, useEffect, useContext } from "react";
import Row from "../components/Row";
import { getApi } from "../services/dataApi";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { logout } from "../utils/authToken";

const MembersTable = () => {
  const [membersData, setMembersData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const { response, apiData } = await getApi(
        "http://localhost:8000/genealogy/family-tree"
      );
      setMembersData(apiData);
      console.log(apiData);
    };
    getData();
  }, []);

  return (
    <div className="mx-8 mt-6">
      <div className="grid grid-cols-5 pb-2 overflow-hidden">
        <h1 className="pl-2 border border-black">Name</h1>
        <h1 className="pl-2 border border-black">Email</h1>
        <h1 className="pl-2 border border-black">Phone</h1>
        <h1 className="pl-2 border border-black">Date Of Birth</h1>
        <h1 className="pl-2 border border-black">Pace Of Residence</h1>
      </div>
      {membersData ? (
        <>
          {membersData.map((members) => (
            <Row
              key={members._id}
              name={members.name}
              email={members.email}
              phone={members.phoneNumber}
              dateOfBirth={members.dateOfBirth}
              placeOfResidence={members.placeOfResidence}
              onclick={() => navigate(`/AddParents/${members._id}`)}
            />
          ))}
        </>
      ) : (
        <p>No Members data Available</p>
      )}
      <div className="mt-4 flex justify-center">
      <Button label={"logout"} outline="black" onclick={logout}/>
      </div>
    </div>
  );
};

export default MembersTable;
