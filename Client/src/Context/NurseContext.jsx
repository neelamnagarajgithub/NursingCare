import { createContext, useState } from "react";

const NurseContext = createContext();

function NurseProvider({ children }) {
  const [nurses, setNurses] = useState([]);
  return (
    <NurseContext.Provider
      value={{
        nurses,
        setNurses,
      }}
    >
      {children}
    </NurseContext.Provider>
  );
}

export { NurseProvider, NurseContext };
