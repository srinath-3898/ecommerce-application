"use client";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: token, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
