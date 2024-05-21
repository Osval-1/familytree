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
  
  
  function RequireAuth({ children, redirectTo }) {
    const { token } = useContext(AuthContext);
    return token ? children : <Navigate to={redirectTo} />;
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
    // <<>
    //   <Routes>
    //     {!token ? (
    //       <>
    //         <Route path="/Homepage" element={<Homepage />} />
    //         <Route path="/Login" element={<Login />} />
    //         <Route path="/Signup" element={<Signup />} />
    //       </>
    //     ) : (
    //       <>
    //         <Route path="/Genealogy" element={<Genealogy />} />
    //         <Route path="/AddMember" element={<AddMember />} />
    //         <Route path="/MembersTable" element={<MembersTable />} />
    //         <Route path="/AddParents/:id" element={<AddParents />} />
    //         {/* <Route path="/Login" element={<Login />} /> */}
    //       </>
    //     )}
    //   </Routes>
    // </>>
  );
}

export default App;
