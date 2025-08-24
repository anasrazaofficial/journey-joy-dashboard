import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { CollegesAndUniversities, Dashboard, DriverManagment, DriverPerformancePayout, FaresManagement, PassengerManagment, RegionManagement, SubscriptionManagement } from "./Pages";
import { Navbar, Sidebar } from "./components";


function App() {
  return (
    <Router>

      <Sidebar />
      <Navbar />

      <main className="pt-[51px] pr-[86px] pb-[78px] pl-[342px] h-[calc(100dvh-84px)] overflow-y-auto bg-[#F7F7F7]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/passenger-managment" element={<PassengerManagment />} />
          <Route path="/region-management" element={<RegionManagement />} />
          <Route path="/colleges-and-universities" element={<CollegesAndUniversities />} />
          <Route path="/subscription-management" element={<SubscriptionManagement />} />
          <Route path="/fares-management" element={<FaresManagement />} />
          <Route path="/driver-management" element={<DriverManagment />} />
          <Route path="/driver-performance-payout" element={<DriverPerformancePayout />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;