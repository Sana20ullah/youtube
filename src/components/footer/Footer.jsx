import React, { useState } from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { Video, Plus, Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Register from "../Login/Register";
import Login from "../Login/Login";

const Footer = ({ onHomeClick, user, setUser, setShowUpload }) => {
  const navigate = useNavigate();

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // ✅ Show Register only if user not logged in
const handleUserClick = () => {
  
  if (user) {
    alert(`👤 Hello, ${user.fullName}`);
  } else {
    setShowRegister(true);
  }
};


  const handlePlusClick = () => {
    if (!user) {
      alert("⚠️ Please Register or Login first to upload videos.");
      setShowLogin(true);
    } else {
      setShowUpload(true); // show UploadVideo form
    }
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  return (
    <>
      <footer className="mobile-footer">
        <button onClick={onHomeClick} className="sidebar-icon-btn" title="Home">
          <FaHome className="sidebar-icon" />
        </button>

        <Video className="footer-icon" />
        <div className="footer-plus" onClick={handlePlusClick}>
          <Plus className="footer-plus-icon" />
        </div>
        <Bell className="footer-icon" />
        <User
          className="footer-icon"
          onClick={handleUserClick}
          style={{ cursor: "pointer" }}
        />
      </footer>

      {/* ✅ LOGIN: After success, immediately open upload form */}
      {showLogin && (
        <Login
          user={user}
          setUser={(newUser) => {
            setUser(newUser);          // Save user
            setShowLogin(false);       // Close login
            setShowRegister(false);    // Close register
            setShowUpload(true);       // ✅ Open upload form directly
          }}
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={handleSwitchToRegister}
        />
      )}

      {/* ✅ REGISTER only if not logged in */}
    {showRegister && (
  <Register
    setUser={setUser}
    onClose={() => setShowRegister(false)} // ✅ handles closing properly
  />
)}

    </>
  );
};

export default Footer;
