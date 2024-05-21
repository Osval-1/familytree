import { useState, useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Homepage,
  Login,
  Signup,
  AddMember,
  Genealogy,
  AddParents,
  MembersTable,
  PageNotFound,
} from "./pages";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/Homepage");
    } else {
      navigate("/MembersTable");
    }
  }, [token]);
  return (
    <>
      <Routes>
        {!token ? (
          <>
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/Genealogy" element={<Genealogy />} />
            <Route path="/AddMember" element={<AddMember />} />
            <Route path="/MembersTable" element={<MembersTable />} />
            <Route path="/AddParents/:id" element={<AddParents />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
