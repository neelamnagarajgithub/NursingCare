import { createContext, useState } from "react";

const NurseContext = createContext();

function NurseProvider({ children }) {
  const [nurses, setNurses] = useState([]);
  const [nurse, setNurse] = useState([]);
  return (
    <NurseContext.Provider
      value={{
        nurses,
        nurse,
        setNurses,
        setNurse,
      }}
    >
      {children}
    </NurseContext.Provider>
  );
}

export { NurseProvider, NurseContext };
