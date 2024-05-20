import React, { createContext, useState, useEffect } from "react";
import { getToken } from "../utils/authToken";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
