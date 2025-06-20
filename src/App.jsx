// MainWeb.jsx (your main layout + routes)
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hamburger from "./components/hamburger/Hamburger";
import Vertical from "./components/vertical side/Vertical";
import Footer from "./components/footer/Footer";
import VideoGrid from "./components/video/VideoGrid";
import WatchPage from "./components/WatchPage/WatchPage";

const App = () => {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Hamburger />
      
      <div style={{ flex: 1, display: "flex" }}>
        <Vertical />
        
        <main style={{ flex: 1, padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<VideoGrid />} />
            <Route path="/watch/:id" element={<WatchPage />} />
            <Route path="*" element={<div>404 - Page not found</div>} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
