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
} from "./pages";
import { AuthContext } from "./context/AuthContext";

function App() {
  
  const { token } = useContext(AuthContext);

  function RequireAuth({ children, redirectTo }) {
    return token? children : <Navigate to={redirectTo} replace={true}/>;
  }

  return (<>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route
        path="/MembersTable"
        element={
          <RequireAuth redirectTo="/Login">
               <MembersTable />
          </RequireAuth>
        }
      />
      <Route
        path="/Genealogy"
        element={
          <RequireAuth redirectTo="/Login">
               <Genealogy />
          </RequireAuth>
        }
      />
      <Route
        path="/AddMember"
        element={
          <RequireAuth redirectTo="/Login">
               <AddMember />
          </RequireAuth>
        }
      />
      <Route
        path="/AddParents/:id"
        element={
          <RequireAuth redirectTo="/Login">
               <AddParents />
          </RequireAuth>
        }
      />
    </Routes>
  </>
  );
}

export default App;
