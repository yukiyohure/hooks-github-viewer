import { useState, createContext } from "react";
// import { fetchUser } from "../service/apiRequest";

// createContext の引数には global state の初期値を指定してあげるイメージ?
export const ProfileContext = createContext();

export const ProfileContextProvider = (props) => {
  const [user, setUser] = useState({
    avatar_url: "https://avatars.githubusercontent.com/u/35441214?v=4",
    name: "Yuki Shibata",
    html_url: "https://github.com/yukiyohure",
    following: 6,
    followers: 4,
    public_repos: 28,
    owned_private_repos: 2,
  });
  return (
    <ProfileContext.Provider value={{user, setUser}}>
      {props.children}
    </ProfileContext.Provider>
  );
};
