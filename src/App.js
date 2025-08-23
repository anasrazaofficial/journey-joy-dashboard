import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Dashboard } from "./Pages";
import { Navbar, Sidebar } from "./components";


function App() {
  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="main-container">
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