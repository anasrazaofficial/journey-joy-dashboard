import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { CollegesAndUniversities, Dashboard, FaresManagement, PassengerManagment, RegionManagement, SubscriptionManagement } from "./Pages";
import { Navbar, Sidebar } from "./components";


function App() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <main className="pt-[51px] pr-[86px] pb-[78px] pl-[342px] h-[calc(100dvh-84px)] bg-[#F7F7F7]">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/passenger-managment" element={<PassengerManagment />} />
            <Route path="/region-management" element={<RegionManagement />} />
            <Route path="/colleges-and-universities" element={<CollegesAndUniversities />} />
            <Route path="/subscription-management" element={<SubscriptionManagement />} />
            <Route path="/fares-management" element={<FaresManagement />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;