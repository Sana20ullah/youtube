import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hamburger from "./components/hamburger/Hamburger";
import Vertical from "./components/vertical side/Vertical";
import Footer from "./components/footer/Footer";
import VideoGrid from "./components/video/VideoGrid";
import WatchPage from "./components/WatchPage/WatchPage";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import UploadVideo from './components/VideoUpload/UploadVideo';  // adjust the path as needed


const App = () => {
  const navigate = useNavigate();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUpload, setShowUpload] = useState(false);

  const [user, setUser] = useState(null);

  const onHomeClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
    setIsHamburgerOpen(false);
  };

  return (
    
    <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar
  setSearchTerm={setSearchTerm}
  user={user}
  setUser={setUser}
  setShowUpload={setShowUpload} // ✅ pass this prop
/>

<Footer
  onHomeClick={onHomeClick}
  user={user}
  setUser={setUser}
  setShowUpload={setShowUpload}
/>



      <Hamburger isOpen={isHamburgerOpen} onHomeClick={onHomeClick} />

      <div style={{ flex: 1, display: "flex" }}>
        <Vertical onHomeClick={onHomeClick} />

        <main style={{ flex: 1, padding: "1rem" }}>
         <Routes>
  <Route path="/" element={<VideoGrid searchTerm={searchTerm} />} />
  <Route path="/watch/:id" element={<WatchPage />} />
  <Route path="/upload-video" element={<UploadVideo />} />
  <Route path="*" element={<div>404 - Page not found</div>} />
  <Route path="/login" element={<Login user={user} setUser={setUser} />} />
<Route path="/register" element={<Register setUser={setUser} />} />

</Routes>

          
        </main>
      </div>
      {showUpload && (
  <div className="upload-popup">
    <UploadVideo user={user} onClose={() => setShowUpload(false)} />
  </div>
)}

    </div>
  );
};

export default App;
