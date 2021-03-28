import { useState, createContext } from "react";
// import { fetchUser } from "../service/apiRequest";

// createContext の引数には global state の初期値を指定してあげるイメージ?
// でも ProfileContextProvider でもuseStateで初期化できるのでは?
export const ProfileContext = createContext();

export const ProfileContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  return (
    <ProfileContext.Provider value={{user, setUser}}>
      {children}
    </ProfileContext.Provider>
  );
};
