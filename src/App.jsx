import React from "react";
import Navbar from "./components/Navbar/Navbar";         // Adjusted path
import Hamburger from "./components/hamburger/Hamburger";
import Vertical from "./components/vertical side/Vertical";
import VideoGrid from "./components/video/VideoGrid";

const MainWeb = () => {
  return ( 
    <div className="App">
      <Navbar />
      <Hamburger />

      {/* Scrollable Content */}
      <div className="main-content" style={{ display: "flex" }}>
        <Vertical /> {/* Sidebar */}
        <VideoGrid /> {/* Main video grid content */}
      </div>
    </div>
  );
};

export default MainWeb;

