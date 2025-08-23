import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Dashboard } from "./Pages";
import { Navbar, Sidebar } from "./components";


function App() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="pt-[51px] pr-[86px] pb-[78px] pl-[342px] bg-[#F7F7F7]">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;