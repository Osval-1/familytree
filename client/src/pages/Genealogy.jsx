import React,{useContext,useEffect} from "react";
import { AuthContext } from "../context/AuthContext";

const Genealogy = () => {
  const {token} = useContext(AuthContext)
  useEffect(() => {
  console.log(token)
  }, [])
  
  return <div style={{ height: "100%", width: "100%" }}>once time</div>;
};

export default Genealogy;
