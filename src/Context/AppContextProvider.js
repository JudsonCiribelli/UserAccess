import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
  const [userIsLogin, setUserIsLogin] = useState(false);
  return (
    <AppContext.Provider value={{ userIsLogin, setUserIsLogin }}>
      {children}
    </AppContext.Provider>
  );
};
