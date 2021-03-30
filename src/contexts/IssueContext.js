import { createContext, useState } from "react";

export const IssueContext = createContext();

export const IssueContextProvider = ({children}) => {
  const [issueData, setIssueData] = useState({data: []});
  const [searchWord, setSearchWord] = useState("");
  return(
    <IssueContext.Provider value={{issueData, setIssueData, searchWord, setSearchWord}}>
      {children}
    </IssueContext.Provider>
  );
}