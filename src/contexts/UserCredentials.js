import { useState } from "react";
import { createContext } from "react";

export const UserCredentialContext = createContext();

export const UserCredentialProvider = ({ children }) => {
  const [credential, setCredential] = useState({});
  return (
    <UserCredentialContext.Provider value={{ credential, setCredential }}>
      {children}
    </UserCredentialContext.Provider>
  );
};
