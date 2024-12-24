import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const login = () => setisLoggedIn(true);
  const logout = () => setisLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
