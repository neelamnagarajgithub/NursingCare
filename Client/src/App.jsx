import HomePage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nurses from "./Features/Nurses/Nurses";
import NurseProfile from "./Features/Nurses/NurseProfile";
import { NurseProvider } from "./Context/NurseContext";
function App() {
  return (
    <BrowserRouter>
      <NurseProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nurse" element={<Nurses />} />
          <Route path="/nurse/:nurseid" element={<NurseProfile />} />
        </Routes>
      </NurseProvider>
    </BrowserRouter>
  );
}

export default App;
