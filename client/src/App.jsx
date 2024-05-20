import { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Homepage,
  Login,
  Signup,
  AddMember,
  Genealogy,
  AddParents,
} from "./pages";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);
  const { token } = useContext(AuthContext);
  return (
    <>
      <Routes>
        {!token ? (
          <>
            <Route
              path="/"
              element={<Navigate to="/Homepage" replace={true} />}
            />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/Genealogy" element={<Genealogy />} />
            <Route path="/AddMember" element={<AddMember />} />
            <Route path="/AddParents" element={<AddParents />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
