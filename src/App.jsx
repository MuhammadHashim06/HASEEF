import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import UploadPage from "./Pages/UploadPage";
import "./App.css";
import MitigatePage from "./Pages/MitigatePage";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/mitigate" element={<MitigatePage />} />
                    {/* <Route path="/mitigate/:id" element={<MitigationPage />} /> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}
