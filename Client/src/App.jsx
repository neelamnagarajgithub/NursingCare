import HomePage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nurses from "./Features/Nurses/Nurses";
import NurseProfile from "./Features/Nurses/NurseProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nurse" element={<Nurses />} />
        <Route path="/nurse/:nurseid" element={<NurseProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
