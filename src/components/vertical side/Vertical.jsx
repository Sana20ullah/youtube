// Vertical.jsx
import React from "react";
import { FaHome, FaBolt, FaYoutube, FaUser } from "react-icons/fa";
import "./vertical.css";

export default function Vertical({ onHomeClick }) { // ✅ add prop here
  return (
    <div className="sidebar">
      <div className="icon-box">
        <button onClick={onHomeClick} className="sidebar-icon-btn" title="Home">
          <FaHome className="sidebar-icon" />
        </button>
        <FaBolt className="sidebar-icon" title="Shorts" />
        <FaYoutube className="sidebar-icon" title="Subscriptions" />
        <FaUser className="sidebar-icon" title="You" />
      </div>
    </div>
  );
}
